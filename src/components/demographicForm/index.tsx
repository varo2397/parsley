import {TextInput} from '../TextInput'
import {SelectInput} from '../SelectInput'
import {DatePicker} from '../DatePickerInput'
import {statesWithCities} from 'shared/constants'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState, useEffect, useContext} from 'react'
import {get} from 'lodash'
import { GeneralInformationContext } from 'state/generalInformation';

const genders = [
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'},
    {label: 'Other', value: 'other'}
]

const states = Object.keys(statesWithCities).map((state) => ({label: state, value: state}))

const maritalStatusOptions = [
    {label: "Married", value: "married"},
    {label: "Single", value: "single"},
    {label: "Divorced", value: "divorced"},
    {label: "Life Partner", value: "life partner"},
    {label: "Separated", value: "separated"},
    {label: "Widowed", value: "widowed"},
    {label: "Other", value: "other"},
]

export const DemographicForm = (): JSX.Element => {

    const {value: 
        {
            birthDate, city, email, firstName, gender, lastName, maritalStatus, state, streetAddress, zipcode
        },
        onChange,
    } = useContext(GeneralInformationContext)

    const [cities, setCities] = useState<{label: string, value: string}[]>([])

    useEffect(() => {
        if(state) {
            const currentStateCities = get(statesWithCities, state, []) as string[]
            const formattedCities = currentStateCities.map((city) => ({label: city, value: city}))
            setCities(formattedCities)
        }
    }, [state])

    return (
        <Box component="form">
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <TextInput onChange={(value) => onChange('firstName', value)} value={firstName} fullWidth label="First Name"/>
                </Grid>
                <Grid item xs={4}>
                    <TextInput onChange={(value) => onChange('lastName', value)} value={lastName}fullWidth label="Last Name"/>
                </Grid>
                <Grid item xs={4}>
                    <TextInput onChange={(value) => onChange('email', value)} value={email} label="Email" type="email" fullWidth/>
                </Grid>
                <Grid item xs={4}>
                    <DatePicker onChange={(value) => {
                        onChange('birthDate', value?.toJSDate() || new Date())
                    }} value={birthDate} fullWidth label="Date of Birth"/>
                </Grid>
                <Grid item xs={4}>
                    <SelectInput onChange={(value) => onChange('gender', value)} value={gender} label="Gender" items={genders} fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <SelectInput items={maritalStatusOptions} onChange={(value) => onChange('maritalStatus', value)}fullWidth value={maritalStatus} label="Marital Status"/>
                </Grid>
                <Grid item xs={3}>
                    <TextInput onChange={(value) => onChange('streetAddress', value)} value={streetAddress}fullWidth label="Street Address" multiline/>
                </Grid>
                <Grid item xs={3}>
                    <SelectInput items={states} onChange={(value) => onChange('state', value)} value={state} fullWidth label="State"/>
                </Grid>
                <Grid item xs={3}>
                    <SelectInput items={cities} onChange={(value) => onChange('city', value)} value={city}fullWidth label="City"/>
                </Grid>
                <Grid item xs={3}>
                    <TextInput onChange={(value) => onChange('zipcode', value)} value={zipcode.toString()}fullWidth label="Zip" type="number"/>
                </Grid>
            </Grid>
        </Box>
    )
}