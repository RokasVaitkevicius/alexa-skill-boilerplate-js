const UnhandledIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope
    return request.intent
      && request.intent.name === 'AMAZON.FallbackIntent'
  },
  handle(handlerInput) {
    const { responseBuilder, attributesManager } = handlerInput
    const {
      speech,
      reprompt,
      i18n,
      SPEECH_KEYS,
    } = attributesManager.getRequestAttributes()

    speech.say(i18n(SPEECH_KEYS.defaultUnhandled))
    reprompt.say(i18n(SPEECH_KEYS.defaultUnhandledReprompt))

    return responseBuilder
      .speak(speech.ssml(true))
      .reprompt(reprompt.ssml(true))
      .getResponse()
  },
}

export default UnhandledIntent
