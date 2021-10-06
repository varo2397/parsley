export type MedicalState = {
    "Do you smoke any tobacco products?": string
    "Do you drink alcohol?": string
    "Have you regularly used illicit drugs?": string
    "Current medications": string   
    "Medication allergies or reactions": string
    "List any surgeries or hospital stays you have had and their approximate date / year": string
}

export const initialState: MedicalState = {
    "Do you smoke any tobacco products?": "",
    "Do you drink alcohol?": "",
    "Have you regularly used illicit drugs?": "",
    "Current medications": "",
    "Medication allergies or reactions": "",
    "List any surgeries or hospital stays you have had and their approximate date / year": "",
}
type ActionTypes = 'RESET' | 'CHANGE_VALUE'

type Action = {
    type: ActionTypes
    payload: {input: string, value: string }
}


export function medicalReducer(state: MedicalState, action: Action) {
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
