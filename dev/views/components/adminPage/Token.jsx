import React from 'react'
import PropTypes from 'prop-types'

const TOKEN = 'token'
const YES = 'yes'
const NO = 'no'
export default class Token extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            token: props.token,
            yes: props.yes,
            no: props.no,
        }
    }
    
    onChange = (type, e)=>{
        let newState = {...this.state}
        newState[type] = e.target.value
        this.setState(newState)
    }
    
    render(){
        return <tr >
                    <th>{this.props.index}</th>
                    <td><input onChange={this.onChange.bind(this, TOKEN)} value={this.state.token}/></td>
                    <td><input onChange={this.onChange.bind(this, YES)} value={this.state.yes}/></td>
                    <td><input onChange={this.onChange.bind(this, NO)} value={this.state.no}/></td>
                </tr>
    }
}

Token.propTypes = {
    index: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired,
    yes: PropTypes.number.isRequired,
    no: PropTypes.number.isRequired,
}