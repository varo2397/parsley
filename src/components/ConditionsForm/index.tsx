import {conditions} from 'shared/constants'
import _ from 'lodash'
import {RadioInput} from '../RadioInput'
import { makeStyles } from '@material-ui/styles';
import {useContext} from 'react'
import { ConditionsContext } from 'state/conditions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    conditionContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    root: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const groupedConditions = _.chain(conditions).groupBy("type").map((value, key) => ({type: _.upperFirst(key), conditions: value})).value()
const conditionItems = [{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}]

type Props = {
    disabled?: boolean;
}

export const ConditionsForm = ({disabled}: Props): JSX.Element => {
    const classes = useStyles()
    const {onChange, value: currentConditions} = useContext(ConditionsContext)
    return <Box className={classes.root} component="form">
        <Grid container>
            {groupedConditions.map(({conditions, type}) => 
                <Grid key={type} item xs={3}>
                    <Typography variant="h5" color="primary">
                        {type}
                    </Typography>
                    <div className={classes.conditionContainer}>
                        {
                            conditions.map(({condition}) => {
                                return <RadioInput disabled={disabled} onChange={value => onChange(condition, value)} value={_.get(currentConditions, condition, "")} items={conditionItems} key={condition} label={condition} />
                            })
                        }
                    </div>
                </Grid>
            )}
        </Grid>
    </Box>
}