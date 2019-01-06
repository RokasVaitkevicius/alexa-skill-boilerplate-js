const HelpIntent = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent'
  },
  handle(handlerInput) {
    const { responseBuilder, attributesManager } = handlerInput
    const {
      speech,
      reprompt,
      i18n,
      SPEECH_KEYS,
    } = attributesManager.getRequestAttributes()

    speech.say(i18n(SPEECH_KEYS.defaultHelp))
    reprompt.say(i18n(SPEECH_KEYS.defaultHelpReprompt))

    return responseBuilder
      .speak(speech.ssml(true))
      .reprompt(reprompt.ssml(true))
      .getResponse()
  },
}

export default HelpIntent
