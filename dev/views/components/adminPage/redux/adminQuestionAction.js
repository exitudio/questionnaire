export const ADD_QUESTION = 'add_question'
export const SAVE_QUESTION = 'save_question'

export const addQuestion = ()=>({ type:ADD_QUESTION})
export const saveQuestion = question=>({ 
    type:SAVE_QUESTION,
    payload: question,
})