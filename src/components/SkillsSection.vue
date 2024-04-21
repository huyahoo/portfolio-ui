<script setup lang="ts">
import type { Skill } from '@/types/schema';

const props = defineProps<{
  skills: Skill[];
}>();

const toggleSkill = (skill: Skill) => {
  skill.show = !skill.show;
};

</script>

<template>
  <section class="skills section" id="skills">
    <h2 class="section__title">{{ $t("main.skills.title") }}</h2>
    <span class="section__subtitle">{{ $t("main.skills.subtitle") }}</span>

    <div class="skills__container container grid">
      <div
        v-for="skill in props.skills" :key="skill.id"
        class="skills__content" 
        :class="[ skill.show ? 'skills__open' : 'skills__close' ]"
      >
      <div class="skills__header" @click="toggleSkill(skill)">
          <i :class="['uil', `${skill.icon}`, 'skills__icon']"></i>

          <div>
            <h1 class="skills__title">{{ $t(`${skill.title}`) }}</h1>
            <span class="skills__subtitle">{{ $t("skills.experience") + skill.subtitle + $t("skills.years") }}</span>
          </div>

          <i class="uil uil-angle-down skills__arrow"></i>
        </div>

        <div class="skills__list grid">
          <div
            v-for="data in skill.skillsList"
            :key="data.id"
            class="skills__data"
          >
            <div class="skills__titles">
              <h3 class="skills__name">{{ data.name }}</h3>
              <span class="skills__number">{{ data.level }}</span>
            </div>

            <div class="skills__bar">
              <span class="skills__percentage" :style="{ width: `${data.level}%` }"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills__container {
  row-gap: 0;

  & .skills__open {
    > .skills__list {
      height: max-content;
      margin-bottom: var(--mb-2-5);
    }

    & .skills__arrow {
      transform: rotate(-180deg);
    }
  }

  & .skills__close {
    > .skills__list {
      height: 0;
      overflow: hidden;
    }
  }

  & .skills__header {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: var(--mb-2-5);

    & .skills__icon, .skills__arrow {
      font-size: 2rem;
      color: var(--first-color);
    }

    & .skills__icon {
      margin-right: var(--mb-0-75);
    }

    & .skills__arrow {
      margin-left: auto;
      transition: .4s;
    }

    & .skills__title {
      font-size: var(--h3-font-size);

      & .skills__subtitle {
        font-size: var(--small-font-size);
        color: var(--text-color-light);
      }
    }
  }

  & .skills__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);

    & .skills_name {
      font-size: var(--normal-font-size);
      font-weight: var(--font-medium);
    }
  }

  & .skills__bar, .skills__percentage {
    height: 5px;
    border-radius: .25erm;
  }

  & .skills__bar {
    background-color: var(--first-color-lighter);
  
    & .skills__percentage {
      display: block;
      background-color: var(--first-color);
    }
  }

  & .skills__list {
    row-gap: 1.5rem;
    padding-left: 2.7rem;
  }
}

@media screen and (max-width: 350px) {
  .skills__title {
    font-size: var(--normal-font-size) !important;
  }
}

@media screen and (min-width: 568px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
