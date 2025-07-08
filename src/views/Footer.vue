<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">{{ $t('footer.title') }}</h1>
          <span class="footer__subtitle">{{ $t('footer.subtitle') }}</span>
        </div>

        <ul class="footer__links">
          <li>
            <a
              href="#skills"
              class="footer__link"
              >{{ $t('footer.skills') }}</a
            >
          </li>
          <li>
            <a
              href="#portfolio"
              class="footer__link"
              >{{ $t('footer.portfolio') }}</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="footer__link"
              >{{ $t('footer.contact') }}</a
            >
          </li>
        </ul>

        <div class="footer__socials">
          <a
            href="https://www.facebook.com/huy.phung.205"
            target="_blank"
            class="footer__social"
            aria-label="Facebook"
          >
            <i class="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/huy.phung.205/"
            target="_blank"
            class="footer__social"
            aria-label="Instagram"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/huy-phung-205/"
            target="_blank"
            class="footer__social"
            aria-label="LinkedIn"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>

        <p class="footer__copy">&#169; 2024 Huy. All right reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding-top: 2rem;

  & .footer__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;

    & .footer__container {
      row-gap: 2.5rem;

      & .footer__title,
      .footer__subtitle,
      .footer__link,
      .footer__social {
        color: #fff;
      }

      & .footer__title {
        font-size: var(--h1-font-size);
        margin-bottom: var(--mb-0-25);

        & .footer__subtitle {
          font-size: var(--small-font-size);
        }
      }

      & .footer__links {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;

        & .footer__link {
          &:hover {
            color: var(--first-color-lighter);
          }
        }
      }

      & .footer__socials {
        & .footer__social {
          font-size: 1.25rem;
          margin-right: var(--mb-1-5);

          &:hover {
            color: var(--first-color-lighter);
          }
        }
      }

      & .footer__copy {
        font-size: var(--smaller-font-size);
        text-align: center;
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 568px) {
  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .footer__bg {
    padding: 3rem 0 1.5rem !important;

    & .footer__container {
      grid-template-columns: repeat(3, 1fr);
      padding: 0 1rem;

      & .footer__title {
        font-size: var(--h2-font-size) !important;
      }
    }

    & .footer__links {
      flex-direction: row !important;
      column-gap: 2rem;
      justify-content: center;
    }

    & .footer__socials {
      justify-self: flex-end;
    }

    & .footer__copy {
      margin-top: 1rem;
      grid-column: 1 / -1;
    }
  }
}

@media screen and (min-width: 1024px) {
  .footer__container {
    padding: 0 !important;
  }
}
</style>
