import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import PrototypeFooter from '../components/Footer/PrototypeFooter';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return (
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Mentions légales" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{marginTop: 40}}>
                        <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site legalplace.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

                        <h2>Edition du site</h2>
                        <p>Le site automatiic.tech est édité par la société automatiic, micro-entreprise ayant pour numéro de SIRET 81032071300045 et qui est domiciliée au 107 rue du docteur magnin Hauteville</p>

                        <p>Responsable de publication: Neplaz dimitri</p>

                        <h2>Hébergeur</h2>

                        <p>Le site automatiic est hébergé par la société o2switch</p>

                        <p>Adresse: 222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand</p>

                        <p>Le stockage des données personnelles des Utilisateurs est exclusivement réalisé sur les centre de données (« clusters ») localisés dans des Etats membres de l’Union Européenne de la société o2switch</p>

                        <h2>Nous contacter</h2>
                        <p></p>Par email : support@legalplace.fr
                    </div>
                </div>
            </div>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData} />
        </div>
    )
}
export default About;