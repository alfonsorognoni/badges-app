import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Home.css';
import astronautas from '../images/astronauts.svg';
import confLogo from '../images/platziconf-logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <img src={confLogo} alt="logo conferencia" className="img-fluid mb-2"></img>
                        <h1 className="text-white text-uppercase">Print Your Badges</h1>
                        <Link className="btn btn-primary" to="/badges">Start</Link>
                    </div>
                    <div className="Home__col d-none d-md-block col-md-8">
                        <img src={astronautas} alt="astronautas" className="img-fluid p-4"></img>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;
