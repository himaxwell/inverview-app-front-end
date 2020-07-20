import { connect } from 'react-redux'
import App from '../components/app'

const mapStateToProps = () => {
  // Map State Here
}

const mapDispatchToProps = {
  // Insert Actions Here
}

const ConferenceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

export default ConferenceContainer
