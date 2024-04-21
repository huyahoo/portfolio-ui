<script setup lang="ts">
</script>

<template>
  <section class="about section" id="about">
    <h2 class="section__title">{{ $t("main.about.title") }}</h2>
    <span class="section__subtitle">{{ $t("main.about.subtitle") }}</span>
    
    <div class="about__container container grid">
      <img src="@/assets/images/perfil.jpeg" alt="" class="about__img">
      <div class="about__data">
        <p class="about__description">{{ $t("main.about.description") }}</p>

        <div class="about__info">
          <div>
            <span class="about__info-title">3</span>
            <span class="about__info-name"> {{ $t("main.about.languages.title") }} <br> {{ $t("main.about.languages.subtitle") }}</span>
          </div>

          <div>
            <span class="about__info-title">3+</span>
            <span class="about__info-name"> {{ $t("main.about.experience.title") }} <br> {{ $t("main.about.experience.subtitle") }}</span>
          </div>

          <div>
            <span class="about__info-title">4+</span>
            <span class="about__info-name"> {{ $t("main.about.worked.title") }} <br> {{ $t("main.about.worked.subtitle") }}</span>
          </div>
        </div>

        <div class="about__buttons">
          <a download="PHUNGQUANGHUY_CV.pdf" href="../assets/cv/20240419_CV.pdf" class="button button-flex">
            {{ $t("main.about.downloadCv") }}
            <i class="uil uil-download-alt button__icon"></i>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about__img {
  width: 200px;
  border-radius: .5rem;
  justify-self: center;
  align-self: center;
}

.about__description {
  text-align: center;
  margin-bottom: var(--mb-2-5);
}

.about__info {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);

  & .about__info-name {
    font-size: var(--small-font-size);
  }

  & .about__info-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
  }

  & .about__info-title, .about__info-name {
    display: block;
    text-align: center;
  }
}

.about__buttons {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 568px) {
  .about__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .about__container {
    column-gap: 5rem;

    & .about__img {
      width: 350px;
    }

    & .about__description {
      text-align: initial;
    }

    & .about__info {
      justify-content: space-between;
    }

    & .about__buttons {
      justify-content: initial;
    }
  }
}
</style>
