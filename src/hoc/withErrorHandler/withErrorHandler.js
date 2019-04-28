import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            })
            axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
                console.log(error);
            })
        };
        errorViewedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal
                        loading='true'
                        show={this.state.error} closeModal={this.errorViewedHandler}>
                        <p>{this.state.error ? this.state.error.message : null}</p>
                    </Modal>
                    <WrappedComponent  {...this.props} />
                </Aux>
            );
        }
    }
};

export default withErrorHandler;