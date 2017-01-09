import React from 'react';
import {Link} from 'react-router';

export default class PersonList extends React.Component{
    render() {
        let create_link = "person/CreatePerson";
        return (
            <div>
                <div>
                    <Link to={create_link}>Create User Data</Link>
                    <br/><br/>
                </div>
                <div className="table">
                <table className="table table-striped table-bordered">
                <tbody>
                {
                     this.props.persons.map((item, index) => {
                        let link_person = "/person/"+item.id
                        return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.job_title}</td>
                            <td><Link to={link_person}>Edit Person</Link></td>
                            <td className="text-center">
                                <button onClick={(e) => this.props.delData(item.id)}>Delete</button>
                            </td>
                            </tr>
                            })
                            }
                            </tbody>
                            </table>
                </div>
            </div>
                        )
        }
}

