import * as QuestionAction from './adminQuestionAction'
export const defaultState = {
    questions: []
}

const questionReducer = (state = defaultState, action)=>{
    switch(action.type){
        case QuestionAction.ADD_QUESTION:
            let questions = [...state.questions]
            if(questions.length === 0 || questions[questions.length-1].title !== ''){
                questions.push({
                    title:'',
                    tokens:[{
                        token:'',
                        yes:0,
                        no:0,
                    }]
                })
            }
            return {...state, questions}
        case QuestionAction.SAVE_QUESTION:
            console.log(action.payload)
            return {...state}
        default:
            return {...state}
    }

}
export default questionReducer