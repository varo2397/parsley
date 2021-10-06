import TextField from '@mui/material/TextField';
type Props = {
    placeholder?: string
    value: string
    onChange: (value: string) => void 
    hasError?: boolean
    helperMessage?: string
    type?: "text" | "number" | "email"
    multiline?: boolean
    label?: string
    fullWidth?: boolean
}

export const TextInput = ({onChange, placeholder, value, hasError, helperMessage, label, type = "text", multiline = false, fullWidth}: Props): JSX.Element => {
    return <TextField 
        variant="outlined" 
        type={type} 
        value={value} 
        error={hasError} 
        placeholder={placeholder} 
        label={label} 
        multiline={multiline} 
        onChange={(e) => onChange(e.target.value)} 
        helperText={helperMessage} 
        fullWidth={fullWidth} 
    />
}