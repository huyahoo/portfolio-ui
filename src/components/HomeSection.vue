<script setup lang="ts">
</script>

<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div class="home__content grid">
        <div class="home__social">
          <a :href="$t('link.linkedin')" target="_blank" class="home__social-icon">
            <i class="uil uil-linkedin-alt"></i>
          </a>
          
          <a :href="$t('link.github')" target="_blank" class="home__social-icon">
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <div class="home__img">
          <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            </mask>
            <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                
                <image class="home__blob-img" x="10" y="50" xlink:href="@/assets/images/avatar.png"/>
            </g>
        </svg>

        </div>

        <div class="home__data">
          <h1 class="home__title" v-html="$t('main.home.title')"></h1>
          <h3 class="home__subtitle">{{ $t("main.home.subtitle") }}</h3>
          <p class="home__description">{{ $t("main.home.description") }}</p>
          <a href="#contact" class="button button-flex">
            {{ $t("main.home.contactMe") }}
            <i class="uil uil-message button__icon"></i>
          </a>
        </div>
      </div>

      <div class="home__scroll">
        <a href="#about" class="home__scroll-button button-flex">
          <i class="uil uil-mouse-alt home__scroll-mouse"></i>
          <span class="home__scroll-name">{{ $t("main.home.scrollDown") }}</span>
          <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home__container {
  gap: 1rem;

  & .home__content {
    grid-template-columns: .5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;

    & .home__social {
      display: grid;
      grid-template-columns: max-content;
      row-gap: 1rem;

      & .home__social-icon {
        font-size: 1.25rem;
        color: var(--first-color);

        &:hover {
          color: var(--first-color-alt);
        }
      }
    }

    & .home__img {

      & .home__blob {
        width: 200px;
        fill: var(--first-color);

        & .home__blob-img {
          width: 170px;
        }
      }
    }

    & .home__data {
      grid-column: 1/3;

      & .home__title {
        font-size: var(--big-font-size);
      }

      & .home__subtitle {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-0-75);
      }

      & .home__description {
        margin-bottom: var(--mb-2);
      }
    }
  }

  & .home__scroll {
    display: none;

    & .home__scroll-button {
      color: var(--first-color);
      transition: .3s;

      &:hover {
        transform: translateY(.25rem);
      }

      & .home__scroll-mouse {
        font-size: 2rem;
      }

      & .home__scroll-name {
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
        margin: var(--mb-0-25);
      }

      & .home__scroll-arrow {
        font-size: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 350px) {
  .home__content {
    grid-template-columns: .25fr 3fr !important;

    & .home__blob {
      width: 180px;
    }
  }
}

@media screen and (min-width: 568px) {
  .home__content {
    grid-template-columns: max-content 1fr 1fr !important;

    & .home__data {
      grid-column: initial !important;
      align-items: center;
    }

    & .home__img {
      order: 1;
      justify-self: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .home__container {
    row-gap: 5erm;

    & .home__content {
      padding-top: 5.5rem;
      column-gap: 2rem;

      & .home__blob {
        width: 270px !important;
      }
    }

    & .home__scroll {
      display: block;

      & .home__scroll-button {
        margin-left: 3rem;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .home__social {
    transform: translateX(-6rem);
  }

  .home__blob {
    width: 320px !important;
  }
}
</style>
