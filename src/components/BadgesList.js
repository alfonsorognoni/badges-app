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

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No se encontró ningún badge</h3>
                    <Link to='badges/new' className="btn btn-primary">Crea tu badge</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                    <li key={badge.id} className="BadgeListItem">
                        <Link className="text-reset text-decoration-none col d-flex" to={`/badges/${badge.id}/edit`}>
                            <BadgeListItem badge={badge}></BadgeListItem>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;
