import React from "react";


export default class Footer extends React.Component {
    render() {
        return (
            <div className='footer-top'>
            <div className='container'>
                <div className='row'>
                    <h2 className="about-us">
                        Tentang Kami
                    </h2>
                    <div className='col-md-3'>
                        <div className='menu-footer'>
                            <h4>Lozy</h4>
                            <ul>
                                <li>Tentang Lozy</li>
                                <li>Kerjasama Mitra UMKM</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='menu-footer'>
                            <h4>Mitra</h4>
                            <ul>
                                <li>Pusat Edukasi Mitra</li>
                                <li>Press Release</li>
                                <li>Daftar List</li>
                                <li>Bantuan dan Panduan</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='menu-footer'>
                            <h4>Media Sosial</h4>
                            <div className="d-flex ml-auto">
                            <div className='card-sosmed'>
                                <a href='/' className='active'><i className=""></i></a>
                                <a href='/'><i className=""></i></a>
                                <a href='/'><i className=""></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
}