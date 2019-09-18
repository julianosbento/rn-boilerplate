/* eslint-disable no-unused-vars */
/**
 * Objeto de Tradução EN
 *
 * @copyright (c) AgroclimaPRO 2018
 *

 * @author Fábio Pereira <fabio.pereira@climatempo.com.br>
 *
 */
import I18n from 'react-native-i18n'

import en from './locales/en'
import es from './locales/es'
import ptBr from './locales/pt-br'

I18n.defaultLocale = 'pt-BR'

I18n.currentLocale = I18n.currentLocale()

I18n.fallbacks = true

I18n.translations = {
  'en': en,
  'es': es,
  'pt-BR': ptBr
}

export default I18n
