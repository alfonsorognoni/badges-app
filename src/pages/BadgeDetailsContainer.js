import React from 'react';
import api from '../api';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: undefined,
            error: null,
            isOpenModal: false,
        }
    }

    handleOpenModal = e => {
        this.setState({ isOpenModal: true })
    }

    handleCloseModal = e => {
        this.setState({ isOpenModal: false })
    }

    handleDeleteBadge = async () => {
        this.setState({loading: true, error: null});

        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false});
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error.message} />
        }
        
        return (
            <BadgeDetails onDeleteBadge={this.handleDeleteBadge} isOpenModal={this.state.isOpenModal} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} badge={this.state.data}></BadgeDetails>
        );
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const response = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, data: response});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    componentDidMount() {
        this.fetchData();
    }
}

export default BadgeDetailsContainer;
