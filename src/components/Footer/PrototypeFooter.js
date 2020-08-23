import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PrototypeFooter extends Component {
    render() {
        let FooterData = this.props.FooterData;
        var { rclass } = this.props;
        return (
            <footer className="footer">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" style={{color: 'white'}}>© 2019 - 2020 Automatiic.tech</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><Link to="/mentions-legales">Mentions légales</Link></a>
                    </li>
                </ul>
            </footer>
        )
    }
}
export default PrototypeFooter;