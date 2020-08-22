<template>
  <div id="about" class="w-full flex flex-wrap mb-24 lg:mb-10 xl:mb-20">
    <div class="w-full lg:w-1/2 relative">
      <img class="w-full -z-1" src="@/assets/images/about.png" alt="about" />
      <div class="text-block absolute right-0 bottom-0 mb-16">
        <h1
          class="druk-font text-4xl xl:text-6xl uppercase text-right text-white mr-8"
        >
          La comida es <span class="text-yellow block">nuestro arte</span>
        </h1>
      </div>
    </div>
    <div class="w-full lg:w-1/2 relative">
      <img
        id="yellow-lines-vector"
        class="w-full absolute -z-1 lg:mt-20 xl:mt-24"
        src="@/assets/svg/lines.svg"
        alt="vector"
      />
      <h1
        class="syne-font
          ml-12 mt-24
          text-3xl md:text-2xl
          xl:ml-16 xl:text-3xl xl:mt-40"
      >
        ¿Quién es Foodies?
      </h1>
      <p
        class="
          text-2xl
          lg:text-sm ml-12 mt-6
          xl:text-2xl xl:ml-16 xl:mt-10 xl:mr-32"
      >
        Elit irure ad nulla id elit laborum nostrud mollit irure. Velit
        reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
        consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure
        eiusmod minim occaecat et id minim ullamco.
      </p>
      <h3
        class="syne-font
          ml-12 mt-10
          text-3xl md:text-2xl
          xl:ml-16 xl:mt-12 xl:text-3xl"
      >
        Contáctanos
        <img
          class="inline right-arrow ml-4 xl:w-6"
          src="@/assets/svg/right-arrow.svg"
        />
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "About"
}
</script>
