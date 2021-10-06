import {useState, useMemo, Fragment} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import {routes} from 'shared/constants'

const useStyles = makeStyles({
    root: {
      flex: 1,
    },
    stepperContainer: {
      marginBottom: '2rem',
    },
    stepperButtonsContainer: {
      display: 'flex', 
      flexDirection: 'row', 
      paddingTop: '2rem',
      justifyContent: 'space-between'
    },
    backButton: {
      mr: 1
    },
    contentContainer: {
      minHeight: '50%',
    }

});

type Props = {
  steps: {
    label: string;
    component: JSX.Element
  }[]
}

export const HorizontalStepper = ({steps}: Props): JSX.Element => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory()

  const handleNext = () => {
    if(activeStep === steps.length - 1) {
      history.push(routes.SUMMARY)
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const CurrentStepComponent = useMemo(() => {
    return steps[activeStep].component
  }, [activeStep, steps])

  return (
    <Box className={classes.root}>

      <Stepper activeStep={activeStep} className={classes.stepperContainer}>
        {steps.map(({label}) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
        <Fragment>
          {CurrentStepComponent}
          <Box className={classes.stepperButtonsContainer}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Summary' : 'Next'}
            </Button>
          </Box>
        </Fragment>
    </Box>
  );
}