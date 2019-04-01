import React from 'react';
// CSS
import './styles/Badge.css';

import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="imagen de la conf" ></img>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="avatar"></img>
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