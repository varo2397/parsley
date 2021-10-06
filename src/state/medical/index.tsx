import {createContext, ReactNode, useReducer} from 'react'
import {MedicalState, initialState, medicalReducer} from './medical.reducer'

type MedicalContextState = {
    value: MedicalState,
    onChange: (input: string, value: string ) => void
    onReset: () => void
}

export const MedicalContext = createContext<MedicalContextState>(
    {
        value: initialState, 
        onChange: () => null,
        onReset: () => null
    })

type Props = {
    children: ReactNode
}

export const MedicalProvider = ({children}: Props): JSX.Element => {

    const [state, dispatch] = useReducer(medicalReducer, initialState)

    const onChange = (input: string, value: string ) => {
        dispatch({type: 'CHANGE_VALUE', payload: {input, value}})
    }

    const onReset = () => {
        dispatch({type: 'RESET', payload: {input: '', value: ''}})
    }

    return <MedicalContext.Provider value={{
        value: state,
        onReset,
        onChange
    }}>
        {children}
    </MedicalContext.Provider>
}
