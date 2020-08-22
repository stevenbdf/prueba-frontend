<template>
  <div
    class="w-full flex flex-wrap px-16 mb-32 xl:mb-64 lg:px-16 xl:px-48 flex-col-reverse md:flex-row"
  >
    <img
      id="yellow-vector"
      class="-z-1"
      src="@/assets/images/yellow_vector.svg"
      alt="vector"
    />
    <div class="md:w-1/2">
      <h1 class="druk-font title-size lg:mt-10 xl:mt-24">
        Un nuevo sabor esta
        <span class="block">
          en la ciudad
        </span>
      </h1>
      <p class="mt-2 text-2xl md:text-xl xl:text-2xl xl:mt-3">
        Estamos a punto de descubrir un mundo lleno de sabores y de emociones
        inigualables.
      </p>
      <h3 class="syne-font mt-10 text-3xl md:text-2xl xl:mt-12 xl:text-3xl">
        Encuentranos
        <img
          class="inline right-arrow ml-4 xl:w-6"
          src="@/assets/svg/right-arrow.svg"
        />
      </h3>
    </div>
    <div class="md:w-1/2">
      <img
        class="mb-40 mx-auto md:mb-0 md:ml-12 -mt-10 xl:ml-32 xl:mt-24 md:w-10/12"
        src="@/assets/images/hero_hamburger.png"
        alt="hamburger"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
