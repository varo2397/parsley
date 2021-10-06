import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
}

export const SelectInput = ({items, placeholder, value, onChange, label, disabled = false}: Props): JSX.Element => {
    const onChangeEvent = (event: SelectChangeEvent) => {
        onChange(event.target.value)
    }

    return <Select placeholder={placeholder} value={value} label={label} onChange={onChangeEvent} disabled={disabled}>
        {items.map(({value, label}) => <MenuItem value={value}>{label}</MenuItem>)}
    </Select>
}