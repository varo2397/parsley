import {DemographicForm} from 'components/DemographicForm'
import {ConditionsForm} from 'components/ConditionsForm'
import {MedicalForm} from 'components/MedicalForm'
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import {routes} from 'shared/constants'

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    paperContainer: {
        padding: '2rem',
        marginTop: '2rem'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '1rem'
    },
    iconContainer: {
        cursor: 'pointer'
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: '1rem'
    }
});

export const Summary = (): JSX.Element => {
    const classes = useStyles()
    const [demographicDisabled, setDemographicDisabled] = useState(true)
    const [conditionsDisabled, setConditionsDisabled] = useState(true)
    const [medicalDisabled, setMedicalDisabled] = useState(true)

    const history = useHistory()
    return <Box className={classes.root}>
        <Typography variant="h2" component="div" gutterBottom color="primary">
            Summary
        </Typography>

        <Paper elevation={3} className={classes.paperContainer} variant="outlined">
            <div className={classes.titleContainer}>
                <Typography variant="h4" component="div" color="primary">
                    General Information
                </Typography>
                <span onClick={() => setDemographicDisabled(!demographicDisabled)} className={classes.iconContainer}>
                    {demographicDisabled ? <EditIcon color="primary" /> : <CloseIcon color="warning"/>}
                </span>
            </div>
            <DemographicForm disabled={demographicDisabled} />
        </Paper>

        <Paper elevation={3} className={classes.paperContainer} variant="outlined">
            <div className={classes.titleContainer}>
                    <Typography variant="h4" component="div" color="primary">
                    Conditions Information
                    </Typography>
                    <span onClick={() => setConditionsDisabled(!conditionsDisabled)} className={classes.iconContainer}>
                        {conditionsDisabled ? <EditIcon color="primary" /> : <CloseIcon color="warning"/>}
                    </span>
            </div>
            <ConditionsForm disabled={conditionsDisabled} />
        </Paper>
        
        <Paper elevation={3} className={classes.paperContainer} variant="outlined">
            <div className={classes.titleContainer}>
                    <Typography variant="h4" component="div" color="primary">
                    Medical Information
                    </Typography>
                    <span onClick={() => setMedicalDisabled(!medicalDisabled)} className={classes.iconContainer}>
                        {medicalDisabled ? <EditIcon color="primary" /> : <CloseIcon color="warning"/>}
                    </span>
            </div>
            <MedicalForm disabled={medicalDisabled}/>
        </Paper>
        <Grid container className={classes.bottomContainer} spacing={2}>
            <Grid item>
                <Button variant="contained" color="warning" onClick={() => history.goBack()}>Go back</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => history.push(routes.TERMS_AND_CONDITIONS)}>Submit</Button>
            </Grid>
        </Grid>

    </Box>
}