import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from 'helpers/auth'

const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            auth() ? (
                <div>
                    <Component {...props}/>
                </div>
            ) : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )} />
    )
}

export default PrivateRouter;