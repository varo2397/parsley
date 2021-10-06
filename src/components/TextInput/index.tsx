import TextField from '@mui/material/TextField';
type Props = {
    placeholder?: string
    value: string
    onChange: (value: string) => void 
    hasError?: boolean
    helperMessage?: string
    type?: "text" | "number"
    multiline?: boolean
    label?: string
}

export const TextInput = ({onChange, placeholder, value, hasError, helperMessage: errorMessage, label, type = "text", multiline = false}: Props): JSX.Element => {
    return <TextField variant="outlined" type={type} value={value} error={hasError} placeholder={placeholder} label={label} multiline={multiline} onChange={(e) => onChange(e.target.value)} helperText={hasError && errorMessage ? errorMessage : ""}/>
}