import React from "react";

export default class Card extends React.Component {
    render() {
        return (
            <div className="laundry-content">
                <div className= "container g-col-4">
                    <div className= 'row'>
                        <div className= 'col-md-4'>
                            <div className="card" >
                                <img src="https://drive.google.com/uc?id=1B4lmI-Rb1YgZRnNBwopKjXR1ug1pDXqb" className="card-img-top" alt/>
                                <div className="card-body">
                                    <h5 className="card-title">Laundry Kenanga
                                    </h5>
                                    <p className="card-text">jarak</p>
                                    
                                </div>
                            </div>
                        </div>               
                        <div className= 'col-md-4'>
                        <div className="card" >
                            <img src="https://drive.google.com/uc?id=1B4lmI-Rb1YgZRnNBwopKjXR1ug1pDXqb" className="card-img-top" alt/>
                            <div className="card-body">
                                <h5 className="card-title">Laundry Kenanga</h5>
                                <p className="card-text">jarak</p>
                            </div>
                        </div>
                        </div>
                        <div className= 'col-md-4'>
                        <div className="card" >
                            <img src="https://drive.google.com/uc?id=1B4lmI-Rb1YgZRnNBwopKjXR1ug1pDXqb" className="card-img-top" alt/>
                            <div className="card-body">
                                <h5 className="card-title">Laundry Kenanga</h5>
                                <p className="card-text">jarak</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}