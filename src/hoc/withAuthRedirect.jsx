import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirect = (Component) => {
    class RenderComponent extends React.Component {

        render() {

            if(!this.props.isAuth) {
                return <Navigate to='/login' />
            }

            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirected = connect(mapStateToPropsForRedirect)(RenderComponent);

    return ConnectedAuthRedirected;
}
