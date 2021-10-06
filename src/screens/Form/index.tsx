import {DemographicForm} from 'components/DemographicForm'
import {ConditionsForm} from 'components/ConditionsForm'
import {HorizontalStepper} from 'components/HorizontalStepper'
import {MedicalForm} from 'components/MedicalForm'
import { makeStyles } from '@material-ui/styles';

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
    return <div className={classes.root}>
        <HorizontalStepper steps={steps}/>
    </div>
}