import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {Navigate} from "react-router";

// actions
import { loginThunk } from '../../state/auth/actions';

// components
import FormLoginRedux from './Form';

import styles from './Login.module.css';

function Login({ className }) {
    const isAuth = useSelector(state => state.auth.isAuth);
    const captchaUrl = useSelector(state => state.auth.captcha);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dispatch(loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha));
    }

    if (isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div className={cn(styles.Root, className)}>
            <FormLoginRedux captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}

Login.propTypes = {
    className: PropTypes.string,
}

Login.defaultProps = {
    className: '',
}

export default Login;
