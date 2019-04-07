import React from 'react';
import api from '../api';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import header from '../images/platziconf-logo.svg';
import './styles/BadgeEdit.css';
import PageError from '../components/PageError';

class BadgeEdit extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            loading: true,
            error: null,
            form: {
                firstName: '',
                lastName: '',
                email: '',
                jobTitle: '',
                twitter: ''
            }
        };
    };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });

            // redirect
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    } 

    render() {
        if (this.state.loading) {
            return (
                <PageLoading></PageLoading>
            )
        }
        // if (this.state.error) {
        //     return (
        //         <PageError error={this.state.error.message}></PageError>
        //     )
        // }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://www.gravatar.com/avatar/HASH"
                            />
                        </div>
                        <div className="col-6">
                            <h1>EDIT ATTENDANT</h1>
                            <BadgeForm 
                                onSubmit={this.handleSubmit} 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                error={this.state.error}
                            ></BadgeForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null});

        try {
            const response = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, error: null, form: response});
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
    }

    componentDidMount (){
        this.fetchData();
    }
}

export default BadgeEdit;