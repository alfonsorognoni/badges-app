import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Alfonso"
                                lastName="Rognoni"
                                twitter="loquesea"
                                jobTitle="Frontend Developer"
                                avatarUrl="https://www.gravatar.com/avatar/HASH"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm></BadgeForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;