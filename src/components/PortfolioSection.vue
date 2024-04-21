<script setup lang="ts">
</script>

<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ $t("main.portfolio.title") }}</h2>
    <span class="section__subtitle">{{ $t("main.portfolio.subtitle") }}</span>

    <div class="portfolio__container container">
      <swiper-container
        class="mySwiper"
        navigation="true"
        :pagination="{ clickable: true }"
        mousewheel="true"
        keyboard="true"
      >
        <swiper-slide>
          <div class="portfolio__content grid">
            <img src="../assets/portfolio/portfolio-website.png" alt="" class="portfolio__img" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">Portfolio Website</h3>
              <p class="portfolio__description">Responsive portfolio website written in Vue3 + Vite + Typescript.</p>
              <a href="https://github.com/takasugitut/portfolio-ui" class="button button-flex button-small portfolio__button">
                Github
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="portfolio__content grid">
            <img src="../assets/portfolio/3d-visualization.png" alt="" class="portfolio__img" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">3D Visualization</h3>
              <p class="portfolio__description">Some practical work about 3D Visualization using WebGL (Three.js) during studying master period in France.</p>
              <a href="https://github.com/takasugitut/3d-visualization" class="button button-flex button-small portfolio__button">
                Github
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="portfolio__content grid">
            <img src="../assets/portfolio/cuda-omp.png" alt="" class="portfolio__img" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">Image Processing utilizes CUDA & Open-OMP</h3>
              <p class="portfolio__description">Some practical work during studying master period in France.</p>
              <a href="https://github.com/takasugitut/shader-based-image-processing" class="button button--flex button-small portfolio__button">
                Github
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="portfolio__content grid">
            <img src="../assets/portfolio/svm.png" alt="" class="portfolio__img" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">Machine Learning - SVM Classifier</h3>
              <p class="portfolio__description">Using machine learning to analyze credit card approvals dataset from Kaggle. Archived competitive accuracy 89%.</p>
              <a href="https://github.com/takasugitut/svm-classifier" class="button button--flex button-small portfolio__button">
                Github
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="portfolio__content grid">
            <img src="../assets/portfolio/auto-encoder.png" alt="" class="portfolio__img" />

            <div class="portfolio__data">
              <h3 class="portfolio__title">Deep Learning - Variational Auto Encoder</h3>
              <p class="portfolio__description">Building an auto encoder from scratch. Testing with MNIST Dataset</p>
              <a href="https://github.com/takasugitut/variational-auto-encoder" class="button button--flex button-small portfolio__button">
                Github
                <i class="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio__container {
  overflow: initial;

  & .portfolio__content {
    padding: 0 3rem;

    & .portfolio__img {
      width: 265px;
      border-radius: .5rem;
      justify-self: center;
    }

    & .portfolio__title {
      font-size: var(--h3-font-size);
    }

    & .portfolio__description {
      margin-bottom: var(--mb-0-75);
    }

    & .portfolio__button {
      margin: var(--mb-0-5) 0;

      &:hover {
        > .button__icon {
          transform: translateX(.25rem);
        }
      }
    }
  }
}

:deep(.swiper-button-next) {
  color: red;
}

.portfolio__button:hover .button__icon{
  transform: translateX(.25rem) !important;
}

@media screen and (min-width: 568px) {
  .portfolio__content {
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .portfolio__img {
    width: 320px !important;
  }
}

@media screen and (min-width: 1024px) {
  .portfolio__content {
    column-gap: 5rem;
  }

  .portfolio__img {
    width: 365px !important;
  }
}
</style>
