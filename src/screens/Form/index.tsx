import {DemographicForm} from 'components/demographicForm'
import {HorizontalStepper} from 'components/HorizontalStepper'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flex: 1,
    },
});

const steps = [{
    label: "General Information",
    component: <DemographicForm />
}]

export const Form = (): JSX.Element => {
    const classes = useStyles()
    return <div className={classes.root}>
        <HorizontalStepper steps={steps}/>
    </div>
}