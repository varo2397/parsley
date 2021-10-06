import {Form} from 'screens/Form'
import {Summary} from 'screens/Summary'
import {TermsAndConditions} from 'screens/TermsAndConditions'
import {routes} from 'shared/constants'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

export const Navigator = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Redirect to={routes.FORM} />} />
                <Route path={routes.FORM}>
                    <Form />
                </Route>
                <Route path={routes.SUMMARY}>
                    <Summary />
                </Route>
                <Route path={routes.TERMS_AND_CONDITIONS}>
                    <TermsAndConditions />
                </Route>
            </Switch>
        </Router>
    )
}
