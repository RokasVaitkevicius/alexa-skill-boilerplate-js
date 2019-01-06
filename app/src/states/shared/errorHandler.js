const ErrorHandler = {
  canHandle() {
    return true
  },
  handle(handlerInput, error) {
    const { attributesManager } = handlerInput
    const { speech, i18n, SPEECH_KEYS } = attributesManager.getRequestAttributes()

    console.log(error)
    speech.say(i18n(SPEECH_KEYS.gracefulCrash))

    return handlerInput.responseBuilder
      .speak(speech.ssml(true))
      .withShouldEndSession(true)
      .getResponse()
  },
}

export default ErrorHandler
