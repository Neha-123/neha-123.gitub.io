import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error : null
        }

        componentWillMount () {
            this.reqinterceptor = axios.interceptors.request.use(req => req, error => {
                this.setState({error: null});
               // return req;
            })
            this.resinterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
            
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqinterceptor);
            axios.interceptors.response.eject(this.resinterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error : null});
        }
            render() {
                
                
                return (
                    <Auxiliary>
                        <Modal show={this.state.error} modalclose = {this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </Auxiliary>
                )
            }
        }
    
}

export default withErrorHandler;