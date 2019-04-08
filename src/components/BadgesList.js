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

    const [query, setQuery] = React.useState('');
    const [filterBadges, setFilterBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter( (badge) => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        setFilterBadges(result);
    }, [query, badges])

    if (filterBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Buscar</label>
                    <input
                        className="form-control" 
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        />
                </div>
                <h3>No se encontró ningún badge</h3>
                <Link to='badges/new' className="btn btn-primary">Crea tu badge</Link>
            </div>
        )
    }
    return (
        <div>
            <div className="form-group">
                <label>Buscar</label>
                <input
                    className="form-control" 
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    />
            </div>
            <ul className="list-unstyled">
                {filterBadges.map((badge) => {
                    return (
                    <li key={badge.id} className="BadgeListItem">
                        <Link className="text-reset text-decoration-none col d-flex" to={`/badges/${badge.id}`}>
                            <BadgeListItem badge={badge}></BadgeListItem>
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default BadgesList;
