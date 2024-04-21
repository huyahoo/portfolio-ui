<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const name = ref<string>();
const email = ref<string>();
const subject = ref<string>();
const message = ref<string>();

const sendMessage = () => {
  const params = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  emailjs.init("dEcT7tpTZVcJ4Zv4-");

  emailjs.send(
    "service_f1lzrqc",
    "template_ti4k94g",
    params,
  ).then(() => {
    alert('Message sent successfully');
  }).catch(() => {
    alert('An error occurred, please try again');
  });
}

</script>

<template>
  <section class="contact section" id="contact">
    <h2 class="section__title">{{ $t("main.contact.title") }}</h2>
    <span class="section__subtitle">{{ $t("main.contact.subtitle") }}</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="uil uil-whatsapp contact__icon"></i>

          <div>
            <h3 class="contact__title">{{ $t("main.contact.whatsapp.title") }}</h3>
            <span class="contact__subtitle">{{ $t("main.contact.whatsapp.subtitle") }}</span>
          </div>
        </div>

        <div class="contact__information">
          <i class="uil uil-envelope contact__icon"></i>
          <div>
            <h3 class="contact__title">{{ $t("main.contact.email.title") }}</h3>
            <span class="contact__subtitle">{{ $t("main.contact.email.subtitle") }}</span>
          </div>
        </div>

        <div class="contact__information">
          <i class="uil uil-map-marker contact__icon"></i>

          <div>
            <h3 class="contact__title">{{ $t("main.contact.location.title") }}</h3>
            <span class="contact__subtitle">{{ $t("main.contact.location.subtitle") }}</span>
          </div>
        </div>
      </div>

      <form action="" id="contact-form" class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="name" class="contact__label">{{ $t("main.contact.form.name") }}</label>
            <input v-model="name" type="text" class="contact__input" id="name" required/>
          </div>

          <div class="contact__content">
            <label for="email" class="contact__label">{{ $t("main.contact.form.email") }}</label>
            <input v-model="email" type="text" class="contact__input" id="email" required/>
          </div>

          <div class="contact__content">
            <label for="subject" class="contact__label">{{ $t("main.contact.form.subject") }}</label>
            <input v-model="subject" type="text" class="contact__input" id="subject" required/>
          </div>

          <div class="contact__content">
            <label for="message" class="contact__label">{{ $t("main.contact.form.message") }}</label>
            <textarea
              v-model="message"
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
            <a class="button button-flex" @click="sendMessage()">
              {{ $t("main.contact.form.send") }}
              <i class="uil uil-message button__icon"></i>
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
    border-radius: .5rem;
    padding: .75rem 1rem .25rem;

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
      padding: .25rem .5rem .5rem 0;
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
