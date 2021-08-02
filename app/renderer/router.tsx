import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ROUTER from '@common/constants/router';
import Root from './container/root';
import Resume from './container/resume';

function Router() {
    return (
        <HashRouter>
            <Switch>
                {/* exact 严格匹配 */}
                <Route path={ROUTER.root} exact>
                    <Root />
                </Route>
                <Route path={ROUTER.resume} exact>
                    <Resume />
                </Route>
            </Switch>
            <Redirect to={ROUTER.root} />
        </HashRouter>
    )
}

export default Router;