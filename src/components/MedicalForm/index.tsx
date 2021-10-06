
import {medicalQuestions} from 'shared/constants'
import {TextInput} from '../TextInput'

export const MedicalForm = (): JSX.Element => {
    return <>
        {medicalQuestions.map(({detail, question}) => {
            return <TextInput value="" onChange={() => null} key={question} helperMessage={detail} multiline label={question} />
        })}
    </>
}