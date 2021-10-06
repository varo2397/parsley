import {conditions} from 'shared/constants'
import _ from 'lodash'
import {RadioInput} from '../RadioInput'
import { makeStyles } from '@material-ui/styles';

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
    return <div className={classes.root}>
        {groupedConditions.map(({conditions, type}) => 
             <div key={type}>
                <h2>
                    {type}
                </h2>
                <div className={classes.conditionContainer}>
                    {
                        conditions.map(({condition}) => {
                            return <RadioInput onChange={() => null} value={""} items={conditionItems} key={condition} label={condition} />
                        })
                    }
                </div>
            </div>
        )}
    </div>
}