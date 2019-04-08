import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetails from '../pages/BadgeDetails';

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
                    <Route path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
