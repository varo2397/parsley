export type GeneralInformationState = {
    firstName: string
    lastName: string
    gender: string
    birthDate: Date
    email: string
    streetAddress: string
    state: string
    city: string
    zipcode: number
    maritalStatus: string
}

export const initialState: GeneralInformationState = {
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: new Date(),
    email: "",
    streetAddress: "",
    state: "",
    city: "",
    zipcode: 0,
    maritalStatus: ""
}
type ActionTypes = 'RESET' | 'CHANGE_VALUE'

type Action = {
    type: ActionTypes
    payload: {input: string, value: string | number | Date}
}


export function generalInformationReducer(state: GeneralInformationState, action: Action) {
    switch(action.type) {
        case 'CHANGE_VALUE': {
            return {
                ...state,
                [action.payload.input]: action.payload.value
            }
        }
        case 'RESET': {
            return {
                ...initialState
            }
        }
        default: {
            return state
        }
    }
}
