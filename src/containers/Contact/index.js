import React from 'react';
import CustomNavbar from '../../components/CustomNavbar';
import Breadcrumb from '../../components/Breadcrumb';
import Contacts from './Contacts';
import PrototypeFooter from '../../components/Footer/PrototypeFooter';
import FooterData from '../../components/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Nous contacter" />
            <Contacts/>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/> 
        </div>
    )
}
export default About;