import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
//   constructor() {
//     super();
//     this.state = { someKey: 'someValue' };
//   }

    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                    <li key={badge.id} className="BadgeListItem">
                        <div className="BadgeListItem__section-avatar">
                            <img className="BadgeListItem__avatar" src={badge.avatarUrl} alt="avatar"></img>
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
