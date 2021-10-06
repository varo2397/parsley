
import {medicalQuestions} from 'shared/constants'
import {TextInput} from '../TextInput'
import {useContext} from 'react'
import { MedicalContext } from 'state/medical'
import {get} from 'lodash'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const MedicalForm = (): JSX.Element => {
    const {onChange, value: currentMedical} = useContext(MedicalContext)
    return <Box component="form">
        <Grid container spacing={5}>
            {medicalQuestions.map(({detail, question}) => (
                 <Grid item xs={6}>
                    <TextInput value={get(currentMedical, question)} onChange={(value) => onChange(question, value)} key={question} helperMessage={detail} multiline label={question} fullWidth/> 
                </Grid>
            ))}
        </Grid>
    </Box>
}