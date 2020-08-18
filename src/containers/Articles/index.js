import React from "react";
import CustomNavbar from '../../components/CustomNavbar';
import Breadcrumb from '../../components/Breadcrumb';
import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import PrototypeFooter from '../../components/Footer/PrototypeFooter';
import FooterData from '../../components/Footer/FooterData';

const Article = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog" />
      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Articles articles={articles} />;
        }}
      </Query>
      <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/> 
    </div>
  );
};

export default Article;
