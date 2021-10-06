import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import {useContext, useState} from 'react'
import {routes} from 'shared/constants'
import { GeneralInformationContext } from 'state/generalInformation';
import { ConditionsContext } from 'state/conditions';
import { MedicalContext } from 'state/medical';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles({
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: '1rem'
    }
})

export const TermsAndConditions = (): JSX.Element => {
    const classes = useStyles()
    const history = useHistory()

    const {value: generalInformation, onReset: onResetGeneralInformation} = useContext(GeneralInformationContext)
    const {value: conditions, onReset: onResetConditions} = useContext(ConditionsContext)
    const {value: medical, onReset: onResetMedical} = useContext(MedicalContext)

    const [accepted, setAccepted] = useState(false)

    const onSubmit = () => {
        console.log(generalInformation, conditions, medical)
        onResetGeneralInformation()
        onResetConditions()
        onResetMedical()
        history.replace(routes.FORM)
    }

    return <div>
        <Typography variant="h2" color="primary">Terms and conditions</Typography>
        <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.

            Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
        </p>

        <FormGroup>
            <FormControlLabel control={<Checkbox checked={accepted} onChange={() => setAccepted(!accepted)} />} label="Do you accept the terms and conditions" />
        </FormGroup>        

        <Grid className={classes.bottomContainer} spacing={2} container>
            <Grid item>
                <Button variant="contained" color="warning" onClick={() => history.goBack()}>Go back</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" disabled={!accepted} onClick={onSubmit}>Submit</Button>
            </Grid>
        </Grid>

    </div>
}