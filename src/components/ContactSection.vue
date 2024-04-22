<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSweetAlert } from '@/mixins/sweetAlertMixin';
import emailjs from 'emailjs-com';

const { t } = useI18n();
const { fireSweetAlertSuccess, fireSweetAlertError } = useSweetAlert();

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});
const isSending = ref(false);

const isMissingInput = computed(() => {
  return !form.name || !form.email || !form.subject || !form.message;
});

const resetForm = () => {
  for (let key in form) {
    form[key] = '';
  }
};

const sendMessage = () => {
  isSending.value = true;

  emailjs.init(process.env.VITE_APP_EMAILJS_USER_ID);

  emailjs
    .send(process.env.VITE_APP_EMAILJS_SERVICE_ID, process.env.VITE_APP_EMAILJS_TEMPLATE_ID, form)
    .then(() => {
      fireSweetAlertSuccess(t('main.contact.form.sendSuccess'));
      resetForm();
    })
    .catch(() => {
      fireSweetAlertError(t('main.contact.form.sendError'));
    })
    .finally(() => {
      isSending.value = false;
    });
};
</script>

<template>
  <section
    class="contact section"
    id="contact"
  >
    <h2 class="section__title">{{ $t('main.contact.title') }}</h2>
    <span class="section__subtitle">{{ $t('main.contact.subtitle') }}</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="uil uil-whatsapp contact__icon"></i>

          <div>
            <h3 class="contact__title">{{ $t('main.contact.whatsapp.title') }}</h3>
            <span class="contact__subtitle">{{ $t('main.contact.whatsapp.subtitle') }}</span>
          </div>
        </div>

        <div class="contact__information">
          <i class="uil uil-envelope contact__icon"></i>
          <div>
            <h3 class="contact__title">{{ $t('main.contact.email.title') }}</h3>
            <span class="contact__subtitle">{{ $t('main.contact.email.subtitle') }}</span>
          </div>
        </div>

        <div class="contact__information">
          <i class="uil uil-map-marker contact__icon"></i>

          <div>
            <h3 class="contact__title">{{ $t('main.contact.location.title') }}</h3>
            <span class="contact__subtitle">{{ $t('main.contact.location.subtitle') }}</span>
          </div>
        </div>
      </div>

      <form
        action=""
        id="contact-form"
        class="contact__form grid"
      >
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label
              for="name"
              class="contact__label"
              >{{ $t('main.contact.form.name') }}</label
            >
            <input
              v-model="form.name"
              type="text"
              class="contact__input"
              id="name"
              required
            />
          </div>

          <div class="contact__content">
            <label
              for="email"
              class="contact__label"
              >{{ $t('main.contact.form.email') }}</label
            >
            <input
              v-model="form.email"
              type="text"
              class="contact__input"
              id="email"
              required
            />
          </div>

          <div class="contact__content">
            <label
              for="subject"
              class="contact__label"
              >{{ $t('main.contact.form.subject') }}</label
            >
            <input
              v-model="form.subject"
              type="text"
              class="contact__input"
              id="subject"
              required
            />
          </div>

          <div class="contact__content">
            <label
              for="message"
              class="contact__label"
              >{{ $t('main.contact.form.message') }}</label
            >
            <textarea
              v-model="form.message"
              name="message"
              id="message"
              cols="0"
              rows="7"
              class="contact__input"
              required
            >
            </textarea>
          </div>

          <div>
            <a
              v-if="isSending"
              class="button button-flex disabled"
              @click="sendMessage()"
            >
              {{ $t('main.contact.form.sending') }}
              <i class="uil uil-spinner-alt button__icon spinner"></i>
            </a>

            <a
              v-else
              class="button button-flex"
              :class="{ disabled: isMissingInput || isSending }"
              @click="sendMessage()"
            >
              {{ $t('main.contact.form.send') }}
              <i class="uil uil-message button__icon send-icon"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact__container {
  row-gap: 3rem;

  & .contact__information {
    display: flex;
    margin-bottom: var(--mb-2);

    & .contact__icon {
      font-size: 2rem;
      color: var(--first-color);
      margin-right: var(--mb-0-75);
    }

    & .contact__title {
      font-size: var(--h3-font-size);
      font-weight: var(--font-medium);
    }

    & .contact__subtitle {
      font-size: var(--small-font-size);
      color: var(--text-color-light);
    }
  }

  & .contact__content {
    background-color: var(--input-color);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.25rem;

    & .contact__label {
      font-size: var(--smaller-font-size);
      color: var(--title-color);
    }

    & .contact__input {
      width: 100%;
      background-color: var(--input-color);
      color: var(--text-color);
      font-family: var(--body-font);
      font-size: var(--normal-font-size);
      border: none;
      outline: none;
      padding: 0.25rem 0.5rem 0.5rem 0;
    }
  }

  & .spinner {
    animation: sending 2s infinite linear;
    @keyframes sending {
      100% {
        transform: rotate(360deg);
      }
    }
  }
}

@media screen and (min-width: 568px) {
  .contact__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  .contact__form {
    width: 460px !important;

    & .contact__inputs {
      // grid-template-columns: repeat(2, 1fr) !important;
    }
  }
}
</style>
