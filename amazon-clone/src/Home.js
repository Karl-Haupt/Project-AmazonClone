import React from 'react';
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                     src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                     alt=""/>
                
                <div className="home__row">
                        {/* 2 Products */}
                        <Product 
                            id="1243575674"
                            title="The Lean Start-up: How Constant Innovation Creates Radically Succcessful Business Paperbook" 
                            price={29.99} 
                            rating={5} 
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
                        <Product
                            id="2353433905"  
                            title="Kasa Smart Light Switch by TP-Link, Single Pole, Needs Neutral Wire, 2.4Ghz WiFi Light Switch Works with Alexa and Google Assistant, UL Certified, 1-Pack (HS200), White" 
                            price={29.99} 
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/71dXf56rv0L._AC_SL1500_.jpg" />
                </div>

                <div className="home__row">
                    {/* 3 Products */}
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    {/* 1 Products */}
                    <Product 
                            id="2345654355" 
                            title=" Sceptre 30-Inch 21: 9 Curved Creative Monitor C305W-2560UN 2560x1080p Ultra Wide Ultra Slim HDMI DisplayPort Up to 85Hz Mprt 1ms FPS-RTS Build-in Speakers, Machine Black 2020" 
                            price={228.87 }  
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/81uNJ%2B-LyJL._AC_SL1500_.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Home;

