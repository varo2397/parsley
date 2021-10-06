import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

type Props = {
    label: string;
    items: {
        value: string;
        label: string;
    }[];
    disabled?: boolean;
    row?: boolean
    onChange: (value: string) => void
    value: string
}

export const RadioInput = ({ label, items, value, onChange, row = true, disabled = false }: Props): JSX.Element => {

    const onChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange((event.target as HTMLInputElement).value)
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                name="radio-buttons-group"
                row={row}
                value={value}
                onChange={onChangeEvent}
            >
                {items.map(({ label, value }) => {
                    return <FormControlLabel value={value} key={new Date().toString()} control={<Radio />} label={label} disabled={disabled} />
                })}
            </RadioGroup>
        </FormControl>
    )
}