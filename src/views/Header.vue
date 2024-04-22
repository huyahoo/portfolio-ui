<script setup lang="ts">
import { ref, shallowRef, computed } from 'vue';
import type { NavItem } from '@/types/schema';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

const store = useStore();

const navItems = shallowRef<NavItem[]>([
  { id: 1, title: 'header.navItems.home', href: '#home', icon: 'uil-estate' },
  { id: 2, title: 'header.navItems.about', href: '#about', icon: 'uil-user' },
  { id: 3, title: 'header.navItems.skills', href: '#skills', icon: 'uil-file-alt' },
  { id: 4, title: 'header.navItems.experiences', href: '#experiences', icon: 'uil-briefcase-alt' },
  { id: 5, title: 'header.navItems.portfolio', href: '#portfolio', icon: 'uil-scenery' },
  { id: 6, title: 'header.navItems.contact', href: '#contact', icon: 'uil-message' },
]);

const isShowNav = ref<Boolean>(false);
const isShowThemeIcon = ref<Boolean>(false);

const toggleNav = (isShow: boolean) => {
  isShowNav.value = isShow;
};

const toggleDarkTheme = () => {
  document.body.classList.toggle('dark-theme');
  isShowThemeIcon.value = !isShowThemeIcon.value;
};

const toggleLightTheme = () => {
  document.body.classList.toggle('dark-theme');
  isShowThemeIcon.value = !isShowThemeIcon.value;
};

const i18n = useI18n();

const currentLocale = computed(() => store.state.global.locale);
const switchLocale = (locale: string) => {
  store.dispatch('global/setLocale', locale);
  i18n.locale.value = locale;
};
</script>

<template>
  <header
    class="header"
    id="header"
  >
    <nav class="nav container">
      <a
        href="#"
        class="nav__logo"
        >{{ $t('header.navLogo') }}</a
      >
      <div
        class="nav__menu"
        :class="{ 'show-menu': isShowNav }"
        id="nav-menu"
      >
        <ul class="nav__list grid">
          <li
            v-for="item in navItems"
            :key="item.id"
            class="nav__item"
          >
            <a
              :href="item.href"
              class="nav__link"
              @click="toggleNav(false)"
            >
              <i :class="['uil', `${item.icon}`, 'nav__icon']"></i>
              {{ $t(item.title) }}
            </a>
          </li>
        </ul>
        <i
          class="uil uil-times nav__close"
          id="nav-close"
          @click="toggleNav(false)"
        ></i>
      </div>

      <div class="nav__btns">
        <i
          v-show="!isShowThemeIcon"
          class="uil uil-moon change-theme"
          id="theme-button"
          @click="toggleDarkTheme"
        ></i>
        <i
          v-show="isShowThemeIcon"
          class="uil uil-sun change-theme"
          id="theme-button"
          @click="toggleLightTheme"
        ></i>
        <i
          v-show="currentLocale == 'ja'"
          class="uil uil-english-to-chinese switch-language"
          @click="switchLocale('en')"
        ></i>
        <i
          v-show="currentLocale == 'en'"
          class="uil uil-letter-japanese-a switch-language"
          @click="switchLocale('ja')"
        ></i>

        <div
          class="nav__toggle"
          id="nav-toggle"
          @click="toggleNav(true)"
        >
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

  & .nav {
    max-width: 968px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .nav__logo,
    .nav__toggle {
      color: var(--title-color);
      font-weight: var(--font-medium);
    }

    & .nav__logo {
      &:hover {
        color: var(--first-color);
      }
    }

    & .nav__toggle {
      font-size: 1.1rem;
      cursor: pointer;
      &:hover {
        color: var(--first-color);
      }
    }

    & .nav__menu {
      & .nav__list {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;

        & .nav__link {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--title-color);
          font-size: var(--small-font-size);
          font-weight: var(--font-medium);

          &:hover {
            color: var(--first-color);
          }
        }

        & .active-link {
          color: var(--first-color);
        }
      }

      & .nav__close {
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--first-color);

        &:hover {
          color: var(--first-color-alt);
        }
      }
    }

    & .show-menu {
      bottom: 0;
      transition: 0.3s;
    }

    & .nav__btns {
      display: flex;
      align-items: center;

      & .change-theme,
      .switch-language {
        font-size: 1.25rem;
        margin-right: var(--mb-1);
        color: var(--title-color);
        cursor: pointer;

        &:hover {
          color: var(--first-color);
        }
      }
    }
  }
}

.scroll-header {
  background-color: var(--body-color);
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 350px) {
  .nav__menu {
    padding: 2rem 0.25rem 4rem !important;

    & .nav__list {
      column-gap: 0;
    }
  }
}

@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
}

@media screen and (min-width: 768px) {
  .header {
    top: 0;
    bottom: initial;
    padding: 0 1rem;

    & .nav {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 1rem;

      & .nav__logo {
        font-size: var(--h2-font-size);
      }

      & .nav__icon,
      .nav__close,
      .nav__toggle {
        display: none;
      }

      & .nav__menu {
        margin-left: auto;

        & .nav__list {
          display: flex;
          column-gap: 2rem;

          & .nav__link {
            font-size: var(--normal-font-size);
          }
        }
      }

      & .change-theme,
      .switch-language {
        margin: 0;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .header {
    padding: 0 !important;
  }
}
</style>
