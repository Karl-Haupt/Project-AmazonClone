import React, { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import axios from './axios';
import { db } from './firebase.js';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    
    //Stripe Libary
    const stripe = useStripe();
    const elements = useElements();

    //Error handling
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generate special stripe secret(which allows us to charge the customers)
        
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripes expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
            });
            setClientSecret(response.data.clientSecret)
        }
    
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        //Stripe functions
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) => {
            //PaymentIntent is the payment confirmation
            
            //Firebase Database
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created // The timestamp will be created
                })

            
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/Orders');
        })
    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        //Display any errors as the customers types their card details

        //If the event is empty diable the button
        setDisabled(event.empty);
        //If theirs is error, show the error else show nothing
        setError(event.error ? event.error.message : "")
    }
    
    return (
        <div className="payment">
            <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            {/* Payment section -- Delievery Address */}
                <div className="payment__section" >
                    <div className="payment__title">
                        <h3>Delievery Address</h3>
                    </div>

                    <div className="payment__address" >
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>New Jersey, CA</p>
                    </div>
                </div>

            {/* Payment section -- Review Item */}
                <div className="payment__section" >
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>   

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.title}
                                rating = {item.rating}
                                />
                        ))}
                    </div>
                </div>

            {/* Payment section -- Payment Method */}
                <div className="payment__section" >
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* Stripe Payment */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Error */}
                            {error && <div>{error}</div>}
                        </form>
                        
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default Payment
