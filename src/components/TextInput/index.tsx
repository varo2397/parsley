import TextField from '@mui/material/TextField';
type Props = {
    placeholder?: string
    value: string
    onChange: (value: string) => void 
    hasError?: boolean
    helperMessage?: string
    type?: "text" | "number"
    multiline?: boolean
}

export const TextInput = ({onChange, placeholder, value, hasError, helperMessage: errorMessage, type = "text", multiline = false}: Props): JSX.Element => {
    return <TextField variant="outlined" type={type} value={value} error={hasError} placeholder={placeholder} multiline={multiline} onChange={(e) => onChange(e.target.value)} helperText={hasError && errorMessage ? errorMessage : ""}/>
}