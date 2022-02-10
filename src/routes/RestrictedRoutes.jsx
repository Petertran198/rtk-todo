import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../app/userSlice';

function RestrictedRoutes({ component: Component, ...rest }) {
    const user = useSelector(getUser);
    return (
        <Route
            {...rest}
            render={(props) =>
                user.userID ? <Redirect to='./' /> : <Component {...props} />
            }
        />
    );
}

export default RestrictedRoutes;
