import React, {Component} from 'react';
import Startupsitem from './Startupsitem';
import Reveal from 'react-reveal';

class Overview extends Component {
    render(){
        return(
            <section className="stratup_service_area sec_pad bg_color" style={{position: 'relative', zIndex: 1000}}>
                <div className="container">
                    <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
                       <Reveal effect="fadeInUp">
                           <h1 className="titleService text-center">Test multi-support</h1>
                           <p className="text-center">Assurez les tests de votre produits sur tous les supports</p>
                       
                       </Reveal>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="stratup_service_img">
                                <div className="shape"></div>
                                <img className="laptop_img" src="/laptop.png" alt=""/>
                                <img className="phone_img" src="/phone.png" alt=""/>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 d-flex align-items-center">
                            <div className="stratup_service_info">
                                <Startupsitem Sicon="lni lni-chrome" text="Chrome" />
                                <Startupsitem iconClass="icon_two" Sicon="lni lni-firefox" text="Firefox" />
                                <Startupsitem iconClass="icon_three" Sicon="lni lni-edge" text="Edge" />
                                <Startupsitem iconClass="icon_four" Sicon="lni lni-mobile" text="Mobile" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Overview;