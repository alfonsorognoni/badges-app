import React from 'react';
import {Link} from 'react-router-dom';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';

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
                        <div className="BadgeListItem__section-avatar">
                            <Gravatar className="BadgeListItem__avatar" email={badge.email} alt="avatar"></Gravatar>
                        </div>
                        <div className="BadgeListItem__section-info">
                            <div className="BadgeListItem__name">{badge.firstName} {badge.lastName}</div>
                            <div className="BadgeListItem__twitter">@{badge.twitter}</div>
                            <div className="BadgeListItem__jobTitle">{badge.jobTitle}</div>
                        </div>
                    </li>
                    )
                })}
            </ul>
        );
    }

//   componentDidMount() {
//     this.setState({ someKey: 'otherValue' });
//   }
}

export default BadgesList;
