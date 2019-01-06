import { en, enGB } from './locales'

const languages = {
  en,
  'en-GB': enGB,
}

class I18n {
  constructor(locale = 'en-GB') {
    this.locale = locale
    const [language] = locale.split('-')

    if (languages[language]) {
      this.speech = languages[language]
      if (languages[locale]) {
        this.speech = Object.assign(this.speech, languages[locale])
      } else {
        this.speech = languages.en
      }
    }

    this.SPEECH_KEYS = Object.keys(this.speech)
      .reduce((accu, cur) => { accu[cur] = cur; return accu }, {})
  }

  _(key, ...args) {
    const res = this.speech[key]
    if (typeof res === 'function') {
      return res(...args, this.locale)
    }
    return res
  }
}

export default I18n
