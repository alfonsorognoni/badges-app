import React from 'react';
// CSS
import './styles/Badge.css';

import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';



class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="imagen de la conf" ></img>
                </div>
                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.email} alt="avatar"></Gravatar>
                    <h1>{this.props.firstName} <br></br>{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #algoaca
                </div>
            </div>
        );
    }
}

export default Badge;