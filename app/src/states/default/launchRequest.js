const LaunchRequestHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope
    return handlerInput.requestEnvelope.session.new
      || request.type === 'LaunchRequest'
  },
  async handle(handlerInput) {
    const { responseBuilder, attributesManager } = handlerInput
    const {
      speech,
      reprompt,
      i18n,
      SPEECH_KEYS,
    } = attributesManager.getRequestAttributes()

    speech.say(i18n(SPEECH_KEYS.defaultLaunch))
    reprompt.say(i18n(SPEECH_KEYS.defaultReprompt))

    return responseBuilder
      .speak(speech.ssml(true))
      .reprompt(reprompt.ssml(true))
      .getResponse()
  },
}

export default LaunchRequestHandler
