<script setup lang="ts">
import { ref } from 'vue';
import type { Skill } from '@/types/schema';
import type { QualificationTab } from '@/types/schema';

import HomeSection from '@/components/HomeSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import QualificationSection from '@/components/QualificationSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import ContactSection from '@/components/ContactSection.vue';

const skills = ref<Skill[]>([
  {
    id: 1,
    show: false,
    icon: 'uil-brackets-curly',
    title: 'skills.frontend',
    subtitle: '2',
    skillsList: [
      { id: 1, name: 'HTML', level: 85 },
      { id: 2, name: 'CSS', level: 80 },
      { id: 3, name: 'Javascript', level: 80 },
      { id: 4, name: 'Typescript', level: 40 },
      { id: 4, name: 'VueJs', level: 80 },
    ],
  },
  {
    id: 2,
    show: false,
    icon: 'uil-server-network',
    title: 'skills.backend',
    subtitle: '1',
    skillsList: [
      { id: 1, name: 'Python', level: 80 },
      { id: 2, name: 'C#', level: 40 },
      { id: 3, name: 'Ruby', level: 40 },
      { id: 4, name: 'PostgreSQL', level: 60 },
    ],
  },
  {
    id: 3,
    show: false,
    icon: 'uil-cloud',
    title: 'skills.infra',
    subtitle: '1',
    skillsList: [{ id: 1, name: 'AWS', level: 40 }],
  },
  {
    id: 4,
    show: false,
    icon: 'uil-brain',
    title: 'skills.ai',
    subtitle: '2',
    skillsList: [
      { id: 1, name: 'Tensorflow', level: 40 },
      { id: 1, name: 'PyTorch', level: 40 },
    ],
  },
  {
    id: 5,
    show: false,
    icon: 'uil-cube',
    title: 'skills.vrxr',
    subtitle: '1',
    skillsList: [
      { id: 1, name: 'Unity', level: 40 },
      { id: 1, name: 'WebGL (Three.js)', level: 40 },
    ],
  },
  {
    id: 6,
    show: false,
    icon: 'uil-globe',
    title: 'skills.others',
    subtitle: '2',
    skillsList: [
      { id: 1, name: 'Git', level: 80 },
      { id: 2, name: 'Docker', level: 60 },
    ],
  },
]);

const tabs = ref<QualificationTab[]>([
  {
    id: 1,
    name: 'tabs.education.title',
    icon: 'uil-graduation-cap',
    active: true,
    data: [
      {
        id: 1,
        title: 'tabs.education.data[0].title',
        subtitle: 'tabs.education.data[0].subtitle',
        location: 'tabs.education.data[0].location',
        startDate: 'tabs.education.data[0].startDate',
        endDate: 'tabs.education.data[0].endDate',
      },
      {
        id: 2,
        title: 'tabs.education.data[1].title',
        subtitle: 'tabs.education.data[1].subtitle',
        location: 'tabs.education.data[1].location',
        startDate: 'tabs.education.data[1].startDate',
        endDate: 'tabs.education.data[1].endDate',
      },
      {
        id: 3,
        title: 'tabs.education.data[2].title',
        subtitle: 'tabs.education.data[2].subtitle',
        location: 'tabs.education.data[2].location',
        startDate: 'tabs.education.data[2].startDate',
        endDate: 'tabs.education.data[2].endDate',
      },
      {
        id: 4,
        title: 'tabs.education.data[3].title',
        subtitle: 'tabs.education.data[3].subtitle',
        location: 'tabs.education.data[3].location',
        startDate: 'tabs.education.data[3].startDate',
        endDate: 'tabs.education.data[3].endDate',
      },
    ],
  },
  {
    id: 2,
    name: 'tabs.work.title',
    icon: 'uil-briefcase-alt',
    active: false,
    data: [
      {
        id: 1,
        title: 'tabs.work.data[0].title',
        subtitle: 'tabs.work.data[0].subtitle',
        location: 'tabs.work.data[0].location',
        startDate: 'tabs.work.data[0].startDate',
        endDate: 'tabs.work.data[0].endDate',
      },
      {
        id: 2,
        title: 'tabs.work.data[1].title',
        subtitle: 'tabs.work.data[1].subtitle',
        location: 'tabs.work.data[1].location',
        startDate: 'tabs.work.data[1].startDate',
        endDate: 'tabs.work.data[1].endDate',
      },
      {
        id: 3,
        title: 'tabs.work.data[2].title',
        subtitle: 'tabs.work.data[2].subtitle',
        location: 'tabs.work.data[2].location',
        startDate: 'tabs.work.data[2].startDate',
        endDate: 'tabs.work.data[2].endDate',
      },
      {
        id: 4,
        title: 'tabs.work.data[3].title',
        subtitle: 'tabs.work.data[3].subtitle',
        location: 'tabs.work.data[3].location',
        startDate: 'tabs.work.data[3].startDate',
        endDate: 'tabs.work.data[3].endDate',
      },
    ],
  },
]);
</script>

<template>
  <main class="main">
    <home-section />
    <about-section />
    <skills-section :skills="skills" />
    <qualification-section :tabs="tabs" />
    <portfolio-section />
    <contact-section />
  </main>
</template>

<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .main {
    padding: 0 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .main {
    padding: 0 !important;
  }
}
</style>
