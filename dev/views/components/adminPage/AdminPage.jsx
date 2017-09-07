import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AdminQuestionAction from './redux/adminQuestionAction'
import Question from './Question.jsx'
class AdminPage extends React.Component {

    addQuestion = e=>{
        this.props.addQuestionAction.addQuestion()
    }

    render() {
        return (
            <div className="container home">
                {this.props.questions.map( (question, index) => (
                    <Question key={index}
                              title={question.title} 
                              tokens={question.tokens}
                              /* disableOnClickOutside={true} */
                              isLastIndex={ index===this.props.questions.length }/> )
                )}
                <a className="btn btn-primary" role="button" onClick={this.addQuestion}>Add Question</a>
            </div>)
    }
}

const mapStateToProps = state=>{
    return {
        questions: state.adminQuestionReducer.questions,
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        addQuestionAction: bindActionCreators(AdminQuestionAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)