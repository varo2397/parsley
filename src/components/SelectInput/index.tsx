import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

type Props = {
    items: {
        value: string
        label: string
    }[]
    placeholder?: string
    value: string
    onChange: (value: string) => void
    disabled?: boolean
    label: string
    fullWidth?: boolean
}

export const SelectInput = ({items, placeholder, value, onChange, label, disabled = false, fullWidth = false}: Props): JSX.Element => {
    const onChangeEvent = (event: SelectChangeEvent) => {
        onChange(event.target.value)
    }

    return (
        <FormControl fullWidth={fullWidth}>
            <InputLabel>{label}</InputLabel>
            <Select placeholder={placeholder} value={value} label={label} onChange={onChangeEvent} disabled={disabled} >
                {items.map(({value, label}) => <MenuItem key={label} value={value}>{label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}