import launchRequest from './launchRequest'
import stopIntent from './stop'
import unhandledIntent from './unhandled'
import helpIntent from './help'

export default [
  launchRequest,
  stopIntent,
  helpIntent,
  unhandledIntent,
]
