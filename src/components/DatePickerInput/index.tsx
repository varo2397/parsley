import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';

type Props = {
    label: string
    value: Date | null
    inputFormat?: string
    onChange: (date: Date | null) => void
    disabled?: boolean
}

export const DatePicker = ({label, value, onChange, disabled = false, inputFormat = "MM/dd/yyyy"}: Props): JSX.Element => {
    return <DesktopDatePicker label={label} value={value} inputFormat={inputFormat} onChange={onChange} disabled={disabled} renderInput={(params) => <TextField {...params} />} />
}