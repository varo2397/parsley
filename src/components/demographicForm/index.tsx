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
                <Grid item>
                    <TextInput onChange={(value) => onChange('firstName', value)} value={firstName} label="First Name"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={(value) => onChange('lastName', value)} value={lastName} label="Last Name"/>
                </Grid>
                <Grid item>
                    <SelectInput onChange={(value) => onChange('gender', value)} value={gender} label="Gender" items={genders} />
                </Grid>
                <Grid item>
                    <DatePicker onChange={(value) => {
                        onChange('birthDate', value?.toJSDate() || new Date())
                    }} value={birthDate} label="Date of Birth"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={(value) => onChange('email', value)} value={email} label="Email" type="email"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={(value) => onChange('streetAddress', value)} value={streetAddress} label="Street Address" multiline/>
                </Grid>
                <Grid item>
                    <SelectInput items={states} onChange={(value) => onChange('state', value)} value={state} label="State"/>
                </Grid>
                <Grid item>
                    <SelectInput items={cities} onChange={(value) => onChange('city', value)} value={city} label="City"/>
                </Grid>
                <Grid item>
                    <TextInput onChange={(value) => onChange('zipcode', value)} value={zipcode.toString()} label="Zip" type="number"/>
                </Grid>
                <Grid item>
                    <SelectInput items={maritalStatusOptions} onChange={(value) => onChange('maritalStatus', value)} value={maritalStatus} label="Marital Status"/>
                </Grid>
            </Grid>
        </Box>
    )
}