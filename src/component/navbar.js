import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar-top">
                <div className='container'>
                    <div className="navigation">                     
                        <div className="nav-menu menu">
                            <div className="item">
                                <a className="link active" href="/">LOGO</a>
                            </div>
                        </div>  
                        <div className="nav-menu trans-user">
                        <div className="item">
                                <a className="link" href="/">BERANDA</a>
                            </div>
                            <div className="item">
                                <a className="link" href="/">TOKO</a>
                            </div>
                            <div className="item">
                                <a className="link" href="/">PESANAN</a>
                            </div>   
                            <div className="item">
                                <a className="link" href="/">CHAT</a>
                            </div>
                            <div className="item">
                                <a className="link" href="/">PROFIL</a>
                            </div>                    
                        </div>
                    </div>                                      
                </div>
            </nav>
            
        );
    }
}
