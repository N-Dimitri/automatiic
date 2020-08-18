import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Banner from '../components/Banner/Banner';
import Prestation from '../components/Features/Prestation';
import Overview from '../components/Features/Overview';
import Tooling from '../components/Features/Tooling';
import PrototypeFooter from '../components/Footer/PrototypeFooter';
import FooterData from '../components/Footer/FooterData';

const Home = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" />
            <Banner />
            <Prestation />
            <Overview />
            <Tooling />
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData} /> 
        </div>
    )
}
export default Home;