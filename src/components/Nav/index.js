import React,{useEffect} from "react";
import Query from "../Query";
import { Link } from "react-router-dom";


import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  let color=['color'];
  let logo="/logo.png";
  if(scrolled){
    x.push('scrolled');
    color.push('colorScroll');
    logo="/logo_black.png"; 
  } else {
    color.push('white');
    logo="/logo.png"; 
  }
  return (
    <header className={x.join(" ")}>
    <div className={"", x.join(" ")}>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-container-fluid uk-align-center" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    <li className={color.join(" ")}>
                      <Link
                        to={`/articles`}
                        className="uk-link-reset"
                      >
                        Blog
                          </Link>
                    </li>
                    <li className={color.join(" ")}>
                      <Link
                        to={`/contact`}
                        className="uk-link-reset"
                      >
                        Contact
                          </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
    </header>
  );
};

export default Nav;
