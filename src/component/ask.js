import React from "react";

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <section className='ask'>
                    <div className='container'>
                        <div className='row'>
                            <div class="d-grid gap-4">
                                <button class="btn btn-light" type="button">Bagaimana cara memesan layanan laundry dengan Lozy?
                                </button>
                                <button class="btn btn-ligth" type="button">Kapan Waktu yang bisa dilakukan pengantaran?</button>
                                <button class="btn btn-ligth" type="button">Bagaimana sistem pembayaran di Lozy?</button>
                            </div>                           
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}