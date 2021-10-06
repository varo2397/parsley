import {DemographicForm} from 'components/DemographicForm'
import {ConditionsForm} from 'components/ConditionsForm'
import {HorizontalStepper} from 'components/HorizontalStepper'
import {MedicalForm} from 'components/MedicalForm'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import {routes} from 'shared/constants'

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flex: 1,
    },
});

const steps = [
    {
        label: "General Information",
        component: <DemographicForm />
    },
    {
        label: 'Conditions',
        component: <ConditionsForm />
    },
    {
        label: "Medical Questions",
        component: <MedicalForm />
    }
]

export const Form = (): JSX.Element => {
    const classes = useStyles()
    const history = useHistory()
    return <div className={classes.root}>
        <HorizontalStepper steps={steps} onEnd={() => history.push(routes.SUMMARY)}/>
    </div>
}