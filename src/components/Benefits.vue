<template>
  <div class="w-full flex flex-wrap justify-center mb-20">
    <div class="w-full lg:w-4/12">
      <img
        class="lg:absolute w-10/12 md:w-full ml-32 -mt-64  lg:-mt-20 lg:-ml-24 xl:-mt-32 lg:w-9/12 xl:w-7/12"
        src="@/assets/images/onboarding.png"
        alt="onboarding"
      />
    </div>
    <div class="w-full lg:w-6/12">
      <h1
        class="druk-font text-3xl lg:text-2xl xl:text-5xl mb-16 lg:mb-8 -mt-20 lg:mt-12 xl:mb-10 xl:mt-20 text-center"
      >
        Obten más beneficios
        <span class="block"> Descarga nuestra App</span>
      </h1>
      <div class="hidden md:block absolute w-full lg:w-1/2">
        <div class="flex">
          <div class="w-5/12 lg:w-1/2 flex justify-center">
            <img
              class="mt-3 ml-32 lg:ml-0 w-3/4 xl:w-7/12 -z-1"
              src="@/assets/svg/yellow-arrow.svg"
            />
          </div>
          <div class="w-5/12 lg:w-1/2 flex justify-center">
            <img
              class="mt-3 ml-32 lg:ml-0 w-3/4 xl:w-7/12 flip -z-1"
              src="@/assets/svg/yellow-arrow.svg"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap justify-center">
        <div class="md:w-1/2 text-center px-4 xl:px-12 xl:mb-8">
          <div
            class="bg-yellow rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-5"
          >
            <p class="text-white robot-font font-bold">01</p>
          </div>
          <h3 class="robot-font font-bold text-3xl md:text-lg xl:text-2xl mb-4">
            Solicita rápido
          </h3>
          <p
            class="text-black robot-font text-xl lg:text-sm xl:text-xl mb-4 leading-tight px-24 md:px-0"
          >
            Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
            tellus eget magna aliquet ultricies.
          </p>
        </div>

        <div class="md:w-1/2 text-center px-4 xl:px-12 xl:mb-8">
          <div
            class="bg-yellow rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-5"
          >
            <p class="text-white robot-font font-bold">02</p>
          </div>
          <h3 class="robot-font font-bold text-3xl md:text-lg xl:text-2xl mb-4">
            Fácil de Usar
          </h3>
          <p
            class="text-black robot-font text-xl lg:text-sm xl:text-xl mb-4 leading-tight px-24 md:px-0"
          >
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </div>

        <div class="md:w-1/2 text-center px-4 xl:px-12 xl:mb-8 mt-8">
          <div
            class="bg-yellow rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-5"
          >
            <p class="text-white robot-font font-bold">03</p>
          </div>
          <h3 class="robot-font font-bold text-3xl md:text-lg xl:text-2xl mb-4">
            Promociones especiales
          </h3>
          <p
            class="text-black robot-font text-xl lg:text-sm xl:text-xl mb-4 leading-tight px-24 md:px-0"
          >
            Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar
            tellus eget magna aliquet ultricies.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Benefits"
}
</script>
