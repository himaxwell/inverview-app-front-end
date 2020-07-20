import React from 'react'
import axios from 'axios'

class Conferences extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      conferences: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/conferences.json')
      .then(response =>
        this.setState({ conferences: response.data }))
      .catch(error => console.log(error))
  }

  conferenceTableRows = () => {
    const {
      conferences,
    } = this.state

    return conferences.map((conference) => {
      return (
        <tr key={conference.id}>
          <th scope="row">{conference.id}</th>
          <td>{conference.name}</td>
          <td>{conference.description}</td>
          <td>{conference.created_at}</td>
          <td>
            <button type="submit" className="btn btn-default">
              Remove Conference
            </button>
          </td>
        </tr>
      )
    })
  }

  conferenceTableHeader = () => {
    return (
      <tr>
        <th>#</th>
        <th>Conference Name</th>
        <th>Description</th>
        <th>Date Added</th>
        <th></th>
      </tr>
    )
  }

  conferenceTable = () => {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          {this.conferenceTableHeader()}
        </thead>
        <tbody>
          {this.conferenceTableRows()}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className="col-md-12">
        <form>
          <div className="form-group">
            <label htmlFor="conferenceName">
              Conference Name
              <input
                type="text"
                name="conferenceName"
                className="form-control"
                id="conferenceName"
                placeholder="Name" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="conferenceDescription">
              Conference Description
              <textarea
                className="form-control"
                id="conferenceDescription"
                placeholder="Description"
                rows="4" cols="50" />
            </label>
          </div>
          <button type="submit" className="btn btn-default btn-primary">
            Add Conference
          </button>
        </form>
        <hr />
        {this.conferenceTable()}
        <hr />
      </div>
    )
  }
}

export default Conferences
