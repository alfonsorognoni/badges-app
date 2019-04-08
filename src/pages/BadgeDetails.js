import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import ConfLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';
import ModalDeleteBadge from '../components/ModalDeleteBadge';

function BadgeDetails(props) {
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={ConfLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            jobTitle={badge.jobTitle}
                            twitter={badge.twitter}
                        ></Badge>
                    </div>
                    <div className="col">
                        <h2>Acciones</h2>
                        <div>
                            <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Editar</Link>
                        </div>
                        <div>
                            <button onClick={props.onOpenModal} className="btn btn-danger">Eliminar</button>
                        </div>
                        <ModalDeleteBadge 
                            onDeleteBadge={props.onDeleteBadge} 
                            isOpenModal={props.isOpenModal} 
                            onCloseModal={props.onCloseModal} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;