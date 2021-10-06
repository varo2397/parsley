import {conditions} from 'shared/constants'
import _ from 'lodash'
import {RadioInput} from '../RadioInput'
import { makeStyles } from '@material-ui/styles';
import {useContext} from 'react'
import { ConditionsContext } from 'state/conditions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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

export const ConditionsForm = (): JSX.Element => {
    const classes = useStyles()
    const {onChange, value: currentConditions} = useContext(ConditionsContext)
    return <Box className={classes.root} component="form">
        <Grid container>
            {groupedConditions.map(({conditions, type}) => 
                <Grid key={type} xs={3}>
                    <h2>
                        {type}
                    </h2>
                    <div className={classes.conditionContainer}>
                        {
                            conditions.map(({condition}) => {
                                return <RadioInput onChange={value => onChange(condition, value)} value={_.get(currentConditions, condition, "")} items={conditionItems} key={condition} label={condition} />
                            })
                        }
                    </div>
                </Grid>
            )}
        </Grid>
    </Box>
}