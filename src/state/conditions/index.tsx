import {createContext, ReactNode, useReducer} from 'react'
import {ConditionsState, initialState, conditionsReducer} from './conditions.reducer'

type ConditionsContextState = {
    value: ConditionsState,
    onChange: (input: string, value: string ) => void
    onReset: () => void
}

export const ConditionsContext = createContext<ConditionsContextState>(
    {
        value: initialState, 
        onChange: () => null,
        onReset: () => null
    })

type Props = {
    children: ReactNode
}

export const ConditionsProvider = ({children}: Props): JSX.Element => {

    const [state, dispatch] = useReducer(conditionsReducer, initialState)

    const onChange = (input: string, value: string ) => {
        dispatch({type: 'CHANGE_VALUE', payload: {input, value}})
    }

    const onReset = () => {
        dispatch({type: 'RESET', payload: {input: '', value: ''}})
    }

    return <ConditionsContext.Provider value={{
        value: state,
        onReset,
        onChange
    }}>
        {children}
    </ConditionsContext.Provider>
}
