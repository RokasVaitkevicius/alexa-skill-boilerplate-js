import Speech from 'ssml-builder'
import I18n from '../../assets/i18n'

const RequestInterceptor = {
  async process(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes()
    const { locale } = handlerInput.requestEnvelope.request
    const i18n = new I18n(locale)

    requestAttributes.i18n = (speechKey, ...args) => i18n._(speechKey, ...args)
    requestAttributes.SPEECH_KEYS = i18n.SPEECH_KEYS
    requestAttributes.speech = new Speech()
    requestAttributes.reprompt = new Speech()

    handlerInput.attributesManager.setRequestAttributes(requestAttributes)
  },
}

export default RequestInterceptor
