import React from 'react';
import { connect } from 'react-redux';
import {
    fetchPersonDetails,
    delData
} from '../actions';

import PersonList from "./PersonList"

class PersonDetails extends React.Component {
    constructor(props) {
        super(props);
        this.deletePerson = this.deletePerson.bind(this);
    }
    componentDidMount(){
        this.props.importData();
    }

    deletePerson(item){
        this.props.delDataNow(item);
    }
    render() {
        return(
            <div>
            <PersonList persons={this.props.personData.persons}  delData ={this.deletePerson}/>
            </div>
        )
    }
}

let PersonComponent = connect((state) => {
    return state;
}, (dispatch) => {
    return {
        importData() {
            dispatch(fetchPersonDetails());
        },delDataNow(item) {
            dispatch(delData(item));
        }
    }
})(PersonDetails);

export default PersonComponent;