import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import client from "./utils/apolloClient";
import 'moment/locale/fr';
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.scss";
import "./assets/responsive.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";
import "./index.scss";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
