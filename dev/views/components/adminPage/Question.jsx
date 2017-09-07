import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {saveQuestion} from './redux/adminQuestionAction'
import {connect} from 'react-redux'
import onClickOutside from 'react-onclickoutside'
import Token from './Token.jsx'

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isEdit:false,
            isAdding:false,
        }
        this.childrenToken = []
    }
    handleClickOutside = e=>{
        console.log('out side')
        this.props.saveQuestion({
            title:'aaa',
        })
    }
    addToken = ()=>{
        this.setState({...this.state, isAdding:true})
    }
    getAddingToken = ()=>{
        if(this.state.isAdding){
            return <Token ref={child=> this.childrenToken.push(child) } 
                                            token=''
                                            yes={0} 
                                            no={0} 
                                            index={this.props.tokens.length+1} 
                                            key={'add-token'}/>
        }else{
            return null
        }
    }
    render(){
        return <div>
                    <table className="table table-striped">
                        <caption>Question Title : <input/></caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Token</th>
                                <th>Yes</th>
                                <th>No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tokens.map( (token,index)=>{
                                return <Token ref={child=> this.childrenToken.push(child) } 
                                            token={token.token} 
                                            yes={token.yes} 
                                            no={token.no} 
                                            index={index+1} 
                                            key={index}/>
                            })}
                            {this.getAddingToken()}
                        </tbody>
                    </table>
                    <a className="btn btn-primary" role="button" onClick={this.addToken}>Add Token</a>
                </div>
    }
}

Question.propTypes = {
    title: PropTypes.string.isRequired,
    tokens: PropTypes.arrayOf(
        PropTypes.shape({
            token: PropTypes.string.isRequired,
            yes: PropTypes.number.isRequired,
            no: PropTypes.number.isRequired,
        })
    ).isRequired,
    isLastIndex: PropTypes.bool.isRequired,
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({saveQuestion}, dispatch)
}
export default connect(null, mapDispatchToProps)( onClickOutside(Question) )