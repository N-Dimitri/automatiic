import React from "react";
import { useParams } from "react-router";
import CustomNavbar from '../../components/CustomNavbar';
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import Nav from "../../components/Nav";

import PrototypeFooter from '../../components/Footer/PrototypeFooter';
import FooterData from '../../components/Footer/FooterData';
import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;
        return (
          <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{article.title}</h1>
              <div>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </div>
            </div>
            <div className="background-article">
            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <div className="container-shadow">
                <ReactMarkdown source={article.content} escapeHtml={false} />
                </div>
              </div>
            </div>
            </div>
            <PrototypeFooter rclass={'payment_footer_area_two'} FooterData={FooterData}/> 
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
