<script setup lang="ts">
import { onMounted } from 'vue';

import Header from '@/views/Header.vue';
import Main from '@/views/Main.vue';
import Footer from '@/views/Footer.vue';

const scrollActive = (sections: Array<any>) => {
  return () => {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      }  else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  };
};

const scrollHeader = () => {
  const header = document.getElementById("header");
  const scrollY = window.scrollY;

  if (scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  const scrollY = window.scrollY;

  if (scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

onMounted(() => {
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", scrollActive(Array.from(sections)));
  window.addEventListener("scroll", scrollHeader);
  window.addEventListener("scroll", scrollUp);
});

</script>

<template>
  <Header />
  <Main />
  <Footer />
  <a href="" class="scrollup" id="scroll-up">
    <i class="uil uil-arrow-up scrollup__icon"></i>
  </a>
</template>


<style scoped lang="scss">
.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: var(--first-color);
  border-radius: 0.4rem;
  padding: 0 .3rem;
  opacity: .8;
  transition: 0.4s;
  z-index: var(--z-tooltip);
  cursor: pointer;

  &:hover {
    background-color: var(--first-color-alt);
  }

  &__icon {
    font-size: 1.5rem;
    color: #FFF;
  }
}

.show-scroll {
  bottom: 5rem;
}
</style>