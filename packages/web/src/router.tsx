import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import history from 'helpers/history';
import GlobalStyle from 'styles/global';
import { SnackbarProvider } from 'notistack';
// import PrivateRouter from 'components/PrivateRouter'

// Pages
const Home = lazy(() => import('pages/Home' /* webpackChunkName: "Home" */))

const router = () => {

    return (
        <SnackbarProvider
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            maxSnack={3}
        >
            <BrowserRouter>
                <div>
                    <Switch>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Router history={history}>
                                <Route path="/" exact component={Home} />
                                {/* <Route path="/login" component={Login} />
                                        <Route path="/register" component={Register} />
                                        <Route path="/forgot" component={Forgot} /> */}
                                {/* <PrivateRouter path="/profile" component={Profile} />
                                        <PrivateRouter path="/companies" component={Companies} />
                                        <PrivateRouter path="/modules/:id" component={Modules} />
                                        <PrivateRouter path="/partners" exact component={Partners} />
                                        <PrivateRouter path="/partners/:id" component={PartnersDetail} /> */}
                                {/* <PrivateRouter path="/home" component={Home} /> */}
                                {/* <Route component={notFound} /> */}
                                <GlobalStyle />
                            </Router>
                        </Suspense>

                    </Switch>
                </div>
            </BrowserRouter>
        </SnackbarProvider>
    )
}

export default router