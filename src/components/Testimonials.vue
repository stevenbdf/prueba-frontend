<template>
  <div class="w-full flex flex-wrap justify-center lg:mb-16 xl:mb-32">
    <img
      class="hidden md:block absolute -z-1 w-1/6 xl:w-2/12"
      style="left:0;"
      src="@/assets/svg/red-vector.svg"
      alt="vector"
    />
    <img
      class="hidden md:block absolute mt-16 w-1/6 rotate180 xl:w-2/12"
      src="@/assets/svg/red-vector.svg"
      alt="vector"
    />
    <img
      id="ketchup"
      class="hidden lg:block absolute w-4/12"
      src="@/assets/images/testimonials_bg_ketchup.png"
      alt="hamburger"
    />
    <carousel class="w-7/12 mt-30 pb-32 lg:mt-48 xl:mt-64" perPage="1">
      <slide>
        <h1
          class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
        >
          “El mejor lugar para degustar en familia y amigos!”
        </h1>
        <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
          Es el mejor lugar al que he venido con mi familia, la comida es rica,
          sirven rápido y te atienden de la mejor manera.
        </p>
      </slide>
      <slide>
        <h1
          class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
        >
          “El mejor lugar para degustar en familia y amigos!”
        </h1>
        <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
          Es el mejor lugar al que he venido con mi familia, la comida es rica,
          sirven rápido y te atienden de la mejor manera.
        </p>
      </slide>
      <slide>
        <h1
          class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
        >
          “El mejor lugar para degustar en familia y amigos!”
        </h1>
        <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
          Es el mejor lugar al que he venido con mi familia, la comida es rica,
          sirven rápido y te atienden de la mejor manera.
        </p>
      </slide>
      <slide>
        <h1
          class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
        >
          “El mejor lugar para degustar en familia y amigos!”
        </h1>
        <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
          Es el mejor lugar al que he venido con mi familia, la comida es rica,
          sirven rápido y te atienden de la mejor manera.
        </p>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel"

export default {
  name: "Testimonials",
  components: {
    Carousel,
    Slide
  }
}
</script>
