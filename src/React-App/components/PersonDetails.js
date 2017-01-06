import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {
    fetchPersonDetails,
    delData
} from '../actions';

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
        console.log(this.props);
        return(
            <div>
            <Person persons={this.props.personData.persons}  delData ={this.deletePerson}/>
            </div>
        )
    }
}

class Person extends React.Component{
    render() {
        return (
            <div className="table">
            <table className="table">
            <tbody>
            {
                this.props.persons.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.job_title}</td>
                        <td><Link to={"/person/"+item.id}>Edit Person</Link></td>
                        <td>
                            <button onClick={(e) => this.props.delData(item.id)}>Delete</button>
                        </td>
                        </tr>
                        })
                        }
                        </tbody>
                        </table>
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