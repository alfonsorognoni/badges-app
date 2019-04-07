import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';

import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Badges extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: undefined,
            error: null,
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading></PageLoading>;
        }

        if (this.state.error) {
            return <PageError error={this.state.error.message}></PageError>
            // return `Error: ${this.state.error.message}`;
        }
        return (
        <React.Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"></img>
                    </div>
                </div>
            </div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}></BadgesList>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('====== Did update =====');
        // console.log({prevProps, prevState});
        // console.log({
        //     props: this.props,
        //     state: this.state
        // });
    }
    componentWillUnmount() {
        // clearTimeout(this.timeoutId);
        // console.log('cleared');
        
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        });

        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            });
        }
    };
}

export default Badges;
