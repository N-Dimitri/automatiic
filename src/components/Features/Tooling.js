import React from 'react';
import Reveal from 'react-reveal/Reveal';

const Tooling = () => {
    return(
        <section className="payment_clients_area">
            <div className="clients_bg_shape_top"></div>
            <div className="clients_bg_shape_right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Reveal effect="fadeInLeft" duration={500}>
                            <div className="payment_features_content pr_70">
                                <h1 className="titleService">Boîte à outils</h1>
                                <p>Une veille technique régulière sur les outils les plus efficaces du moment, étudier selon vos besoin</p>
                            </div>
                        </Reveal>                
                    </div>
                    <div className="col-lg-6">
                        <div className="payment_clients_inner">
                            <Reveal effect="fadeInLeft" duration={500}>
                                <div className="clients_item one">
                                    <img src="/testcafe.png" alt="cypress"/>
                                </div>
                                <div className="clients_item two">
                                    <img src="/grafana.svg" alt="grafana"/>
                                </div>
                                <div className="clients_item three">
                                <img src="/circleci.png" alt="circle ci"/>
                                </div>
                                <div className="clients_item four">
                                <img src="/gitlab.png" alt="gitlab"/>
                                </div>
                                <div className="clients_item five">
                                <img src="/selenium.png" alt="selenium"/>
                                </div>
                                <div className="clients_item six">
                                <img src="/webdriverio.png" alt="webdriverio"/>
                                </div>
                                <div className="clients_item seven">
                                <img src="/cy.jpg" alt="cypress"/>
                                </div>
                                <div className="clients_item eight">
                                <img src={require('../../img/home9/logo8.png')} alt=""/>
                                </div>
                            </Reveal>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Tooling;