export type ConditionsState = {
    "High blood pressure": string
    "Cardiac Arrest": string
    "Arrhythmia": string
    "Coronary heart disease": string   
    "IBS": string
    "Crohn's Disease": string
    "Gallstones": string
    "Depression": string
    "Anxiety": string
    "Stress": string
    "Insomnia": string
    "Cancer": string
    "Diabetes": string
}

export const initialState: ConditionsState = {
    "High blood pressure": "",
    "Cardiac Arrest": "",
    "Arrhythmia": "",
    "Coronary heart disease": "",
    "IBS": "",
    "Crohn's Disease": "",
    "Gallstones": "",
    "Depression": "",
    "Anxiety": "",
    "Stress": "",
    "Insomnia": "",
    "Cancer": "",
    "Diabetes": ""
}
type ActionTypes = 'RESET' | 'CHANGE_VALUE'

type Action = {
    type: ActionTypes
    payload: {input: string, value: string }
}


export function conditionsReducer(state: ConditionsState, action: Action) {
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
