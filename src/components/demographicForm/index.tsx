import {TextInput} from '../TextInput'
import {SelectInput} from '../SelectInput'
import {DatePicker} from '../DatePickerInput'
import {statesWithCities} from 'shared/constants'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import {get} from 'lodash'

const genders = [
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'},
    {label: 'Other', value: 'other'}
]

const states = Object.keys(statesWithCities).map((state) => ({label: state, value: state}))

const maritalStatus = [
    {label: "Married", value: "married"},
    {label: "Single", value: "single"},
    {label: "Divorced", value: "divorced"},
    {label: "Life Partner", value: "life partner"},
    {label: "Separated", value: "separated"},
    {label: "Widowed", value: "widowed"},
    {label: "Other", value: "other"},
]

export const DemographicForm = (): JSX.Element => {

    const [state, setState] = useState('')
    const [cities, setCities] = useState<{label: string, value: string}[]>([])

    useEffect(() => {
        if(state) {
            const currentStateCities = get(statesWithCities, state, []) as string[]
            const formattedCities = currentStateCities.map((city) => ({label: city, value: city}))
            console.log(formattedCities)
            setCities(formattedCities)
        }
    }, [state])

    return (
        <Box component="form">
            <Grid container spacing={4}>
                <Grid item>
                    <TextInput onChange={() => null} value={""} placeholder="First Name"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={() => null} value={""} placeholder="Last Name"/>
                </Grid>
                <Grid item>
                    <SelectInput onChange={() => null} value={""} label="Gender" items={genders} placeholder="Gender"/>
                </Grid>
                <Grid item>
                    <DatePicker onChange={() => null} value={null} label="Date of Birth"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={() => null} value={""} placeholder="Email"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={() => null} value={""} placeholder="Street Address" multiline/>
                </Grid>
                <Grid item>
                    <SelectInput items={states} onChange={(newState) => setState(newState)} value={""} label="State"/>
                </Grid>
                <Grid item>
                    <SelectInput items={cities} onChange={() => null} value={""} label="City"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={() => null} value={""} placeholder="Zip" type="number"/>
                </Grid>
                <Grid item>
                    <SelectInput items={maritalStatus} onChange={() => null} value={""} label="Marital Status"/>
                </Grid>
            </Grid>
        </Box>
    )
}