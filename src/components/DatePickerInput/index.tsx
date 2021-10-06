import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import {DateTime} from 'luxon';

type Props = {
    label: string
    value: Date | null
    inputFormat?: string
    onChange: (date: DateTime | null) => void
    disabled?: boolean
    fullWidth?: boolean
}

export const DatePicker = ({label, value, onChange, disabled = false, inputFormat = "MM/dd/yyyy", fullWidth = false}: Props): JSX.Element => {
    return <DesktopDatePicker label={label} value={value} inputFormat={inputFormat} onChange={onChange} disabled={disabled} renderInput={(params) => <TextField fullWidth={fullWidth} {...params} />} />
}