import axios from 'axios'

export function setConferences(conferences) {
  return { type: 'SET_CONFERENCES', payload: conferences }
}

export function fetchConferences() {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/v1/conferences.json')
      .then((res) => {
        const { conferences } = res.data
        dispatch(setConferences(conferences))
      })
      .catch(error => console.log(error))
  }
}
