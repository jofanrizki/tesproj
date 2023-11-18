import React from "react";



export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <section className='banner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className= "image-banner" >
                                    <img src = '' alt ="" className="img"></img>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}