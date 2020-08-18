import React, {Component} from 'react';
import Reveal from 'react-reveal';
class Startupsitem extends Component{
    render(){
        var {Sicon,text,description, iconClass} = this.props;
        return(
            <Reveal bottom cascade>
                <div className="startup_service_item">
                    <div className={`icon ${iconClass}`}><i className={`${Sicon}`}></i></div>
                    <h3 style={{padding: '12px 0'}}>{text}</h3>
                </div>
            </Reveal>
        )
    }
}
export default Startupsitem;