import React from 'react';
import Moment from "react-moment";
import TextTruncate from 'react-text-truncate';
import { Link } from "react-router-dom";


const GridItem = ({ article }) => {
    const imageUrl =
        process.env.NODE_ENV !== "development"
            ? article.image.url
            : process.env.REACT_APP_BACKEND_URL + article.image.url;
    console.log(article);
    return (
        <div className="col-lg-6">
            <div className="blog_list_item blog_list_item_two">
                <Link to={`/article/${article.id}`} className="post_date">
                    <h2><Moment locale="fr" format="Do">{article.published_at}</Moment><span><Moment locale="fr" format="MMMM">{article.published_at}</Moment></span></h2>
                </Link>
                <Link to={`/article/${article.id}`}><img className="img-fluid" src={imageUrl} alt={article.image.url} alt="" /></Link>
                <div className="blog_content">
                    <Link to={`/article/${article.id}`}>
                        <h5 className="blog_title">{article.title}</h5>
                    </Link>
                    <p>
                        <TextTruncate
                            line={2}
                            element="span"
                            truncateText="…"
                            text={article.content}
                        />
                    </p>
                    <div className="post-info-bottom">
                        <Link to={`/article/${article.id}`} className="learn_btn_two"><i className="arrow_right"></i> Lire</Link>
                        {/* <a className="post-info-comments" href="/#">
                            <i className="icon_comment_alt" aria-hidden="true"></i>
                            <span>Comments</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GridItem;