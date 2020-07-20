import React from 'react'
import Conferences from '../components/conferences/'

const App = () => {
  return (
    <div className="col-md-12">
      <h1>Exercise</h1>
      <hr />
      <h4>Add some functionality to this conference listing site</h4>
      <ol>
        <li>Ability to add a new conferences that are persisted in the database</li>
        <li>Ability to remove conferences from the table using "Remove Conference" button</li>
        <li>Display "Date Added" column in a human readable format</li>
        <li>Ability to sort columns "Conference Name" and "Date Added"</li>
      </ol>
      <hr />
      <Conferences />
    </div>
  )
}

export default App
