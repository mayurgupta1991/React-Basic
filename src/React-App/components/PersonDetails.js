import React from 'react';
import { connect } from 'react-redux';
import {
    delData
} from '../actions';

class PersonDetails extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
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
                        <td>
                        <button onClick={(e) => this.props.delDataNow(item.id)}>Delete</button>
                        </td>
                        </tr>
                        })
                }
                </tbody>
                </table>
                </div>
        );
}
}

var PersonComponent = connect((state) => {
    return state;
}, (dispatch) => {
    return {
        delDataNow(item) {
            dispatch(delData(item));
        }
    }
})(PersonDetails);

export default PersonComponent;