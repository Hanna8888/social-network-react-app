import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import { compose } from 'redux';

// hoc
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';

// actions
import {
    getProfileThunk,
    getUserStatusThunk
} from '../../state/profile/actions';

// components
import Preloader from '../common/Preloader/Preloader';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';


function Profile() {
    const params = useParams();
    const dispatch = useDispatch();
    const autorizedUserId = useSelector(state => state.auth.userId);
    const profile = useSelector(state => state.profile.profile);
    const status = useSelector(state => state.profile.status);

    const handleUserId = useCallback(() => {
        let userId = params.userId;

        if (!userId) {
            userId = autorizedUserId;
        }

        dispatch(getProfileThunk(userId));
        dispatch(getUserStatusThunk(userId));
    }, [autorizedUserId, dispatch, params.userId])

    useEffect(() => {
        handleUserId();

        return handleUserId();
    }, [handleUserId]);

    if(!profile) {
        return <Preloader />
    }

    return (
        <div>
            <Info isOwner={!params.userId} profile={profile} status={status} />
            <MyPosts />
        </div>
    )
}

Profile.propTypes = {
    match: PropTypes.object.isRequired,
}

export default compose(
    WithAuthRedirect
)(Profile);
