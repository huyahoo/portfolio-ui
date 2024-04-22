<script setup lang="ts">
import type { QualificationTab } from '@/types/schema';

const props = defineProps<{
  tabs: QualificationTab[];
}>();

const toggleQualification = (tabId: number) => {
  props.tabs.map((tab) => {
    tab.active = false;
    if (tab.id === tabId) {
      tab.active = true;
    }
  });
};
</script>

<template>
  <section
    class="qualification section"
    id="experiences"
  >
    <h2 class="section__title">{{ $t('main.experiences.title') }}</h2>
    <span class="section__subtitle">{{ $t('main.experiences.subtitle') }}</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div
          v-for="tab in props.tabs"
          :key="tab.id"
          class="qualification__button button-flex"
          :class="{ qualification__active: tab.active }"
          @click="toggleQualification(tab.id)"
        >
          <i :class="['uil', `${tab.icon}`, 'qualification__icon']"></i>
          {{ $t(`${tab.name}`) }}
        </div>
      </div>

      <div
        v-for="tab in props.tabs"
        :key="tab.id"
        class="qualification__sections"
      >
        <div
          :id="tab.name"
          class="qualification__content"
          :class="[tab.active ? 'qualification__active' : 'qualification__inactive']"
        >
          <div
            v-for="data in tab.data"
            class="qualification__data"
          >
            <div v-if="data.id % 2 === 0"></div>
            <div v-if="data.id % 2 === 0">
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>

            <div>
              <h3 class="qualification__title">{{ $t(`${data.title}`) }}</h3>
              <span class="qualification__subtitle">{{ $t(`${data.subtitle}`) }}</span>
              <div class="qualification__calendar">
                <p>{{ $t(`${data.location}`) }}</p>

                <i class="uil uil-calendar-alt"></i>
                {{ $t(`${data.startDate}`) + ' - ' + $t(`${data.endDate}`) }}
              </div>
            </div>

            <div v-if="data.id % 2 !== 0">
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.qualification__sections {
  & .qualification__inactive {
    display: none;
  }

  & .qualification__active {
    display: block;
  }
}

.qualification__button.qualification__active {
  color: var(--first-color);
}

.qualification__tabs {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);

  & .qualification__button {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;

    &:hover {
      color: var(--first-color);
    }

    & .qualification__icon {
      font-size: 1.8rem;
      margin-right: var(--mb-0-25);
    }
  }
}

.qualification__data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;

  & .qualification__rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
  }

  & .qualification__line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
  }

  & .qualification__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  & .qualification__subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }

  & .qualification__calendar {
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
  }
}

@media screen and (max-width: 350px) {
  .qualification__data {
    gap: 0.5rem !important;
  }
}

@media screen and (min-width: 568px) {
  .qualification__sections {
    display: grid;
    grid-template-columns: 0.6fr;
    justify-content: center;
  }
}

@media screen and (min-width: 768px) {
  .qualification__tabs {
    justify-content: center;

    & .qualification__button {
      margin: 0 var(--mb-1);
    }
  }

  .qualification__sections {
    grid-template-columns: 0.5fr;
  }
}
</style>
