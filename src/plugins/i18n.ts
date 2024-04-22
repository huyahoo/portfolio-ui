import { createI18n } from 'vue-i18n';
import store from '@/store';
import messages from '@intlify/unplugin-vue-i18n/messages';

// TODO: Need to check usage
interface State {
  global: {
    locale: string;
    availableLocales: string[];
  };
}

const globalMapper = store.state as State;

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: globalMapper.global.locale,
  fallbackLocale: 'ja',
  availableLocales: globalMapper.global.availableLocales,
  messages: messages,
});

export default i18n;
