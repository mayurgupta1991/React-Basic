/**
 * Created by ttn on 5/1/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import {
  fetchData,
  delData
} from '../actions'

class DataList extends Component {

  componentDidMount(){
    this.props.dispatch(fetchData())
  }

  render() {

    const rows = this.props.data.map((row, index) => {

      let to = "/detail/"+row.id

      return (
        <tr key={index}>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td>{row.email}</td>
          <td>{row.company}</td>
          <td><Link to={to}>Click for details</Link></td>
          <td>
            <button onClick={(e) => this.props.dispatch(delData(row))}>Click to Delete</button>
          </td>
        </tr>
      )
    })

    return (

      <div>
        {/*<div>
          <Link to="/createData">Create New User Data</Link>
        </div>*/}
        <div>
          <table>
            <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const DataListComponent = connect((state=>{
  return state
}))(DataList)

export default DataListComponent
