import {createContext, ReactNode, useReducer} from 'react'
import {GeneralInformationState, initialState, generalInformationReducer} from './generalInformation.reducer'

type GeneralInformationContextState = {
    value: GeneralInformationState,
    onChange: (input: string, value: string | number | Date) => void
    onReset: () => void
}

export const GeneralInformationContext = createContext<GeneralInformationContextState>(
    {
        value: initialState, 
        onChange: () => null,
        onReset: () => null
    })

type Props = {
    children: ReactNode
}

export const GeneralInformationProvider = ({children}: Props): JSX.Element => {

    const [state, dispatch] = useReducer(generalInformationReducer, initialState)

    const onChange = (input: string, value: string | number | Date) => {
        dispatch({type: 'CHANGE_VALUE', payload: {input, value}})
    }

    const onReset = () => {
        dispatch({type: 'RESET', payload: {input: '', value: ''}})
    }

    return <GeneralInformationContext.Provider value={{
        value: state,
        onReset,
        onChange
    }}>
        {children}
    </GeneralInformationContext.Provider>
}
