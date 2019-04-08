import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgeListItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="BadgeListItem__section-avatar">
                    <Gravatar className="BadgeListItem__avatar" email={this.props.badge.email} alt="avatar"></Gravatar>
                </div>
                <div className="BadgeListItem__section-info">
                    <div className="BadgeListItem__name">{this.props.badge.firstName} {this.props.badge.lastName}</div>
                    <div className="BadgeListItem__twitter">@{this.props.badge.twitter}</div>
                    <div className="BadgeListItem__jobTitle">{this.props.badge.jobTitle}</div>
                </div>
            </React.Fragment>
        );
    }
}

function BadgesList (props) {
    const badges = props.badges;
    if (badges.length === 0) {
        return (
            <div>
                <h3>No se encontró ningún badge</h3>
                <Link to='badges/new' className="btn btn-primary">Crea tu badge</Link>
            </div>
        )
    }
    return (
        <React.Fragment>
        <div className="form-group">
            <label>Buscar</label>
            <input
                value=""
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                className="form-control" 
                type="text" />
        </div>
        <ul className="list-unstyled">
            {badges.map((badge) => {
                return (
                <li key={badge.id} className="BadgeListItem">
                    <Link className="text-reset text-decoration-none col d-flex" to={`/badges/${badge.id}`}>
                        <BadgeListItem badge={badge}></BadgeListItem>
                    </Link>
                </li>
                )
            })}
        </ul>
        </React.Fragment>
    );
}

export default BadgesList;
