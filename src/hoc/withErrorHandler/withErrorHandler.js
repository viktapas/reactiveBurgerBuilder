import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            })
            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
                console.log(error);
            })
        };
        componentWillUnmount() {
            axios.interceptors.request.eject(this.state.reqInterceptor);
            axios.interceptors.response.eject(this.state.resInterceptor);
        }
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