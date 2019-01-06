const StopIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent')
  },
  async handle(handlerInput) {
    const { responseBuilder, attributesManager } = handlerInput
    const { speech, i18n, SPEECH_KEYS } = attributesManager.getRequestAttributes()

    speech.say(i18n(SPEECH_KEYS.defaultStop))

    return responseBuilder
      .speak(speech.ssml(true))
      .withShouldEndSession(true)
      .getResponse()
  },
}

export default StopIntent
