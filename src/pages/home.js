import React from "react";
import Navbar from "../component/navbar";
import Card from "../component/card";
import Footer from "../component/footer"
import Banner from "../component/banner"
import Ask from "../component/ask"

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <header>
                
                <div className="container">
                    <div className="banner">
                        <div className="row">
                            <div className="col-md-6">
                                <img src='' alt="" className='hero-banner'/>
                            </div>
                            <div className="col-md-6">
                                <div className="txt-banner ml-auto">
                                    <h1>Selamat Datang di</h1>
                                    <h1>LOZY</h1>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <button type="button" class="btn btn-outline-primary  me-md-4">Primary</button>
                                            <button type="button" class="btn btn-outline-primary">Primary</button>  
                                        </div>                                  
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>
                </header> 
                <div className="container">   
                        <Card />    
                        </div>              
                <div className="header-banner">
                    <h2>Kupon Promo</h2>
                <Banner />
                </div>
                <div className="header-ask">
                    <h2>Butuh Bantuan?</h2>
                <Ask />
                </div>

                <Footer />
            </div>
        )
    }
}