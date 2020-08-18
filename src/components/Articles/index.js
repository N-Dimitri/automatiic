import React from "react";
import GridItem from "./GridItem";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <section className="blog_area_two sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 blog_grid_info">
            <div className="row">
              {articles.map((article, i) => {
                return <GridItem article={article} key={`article__${article.id}`} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
