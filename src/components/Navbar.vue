<template>
  <div class="z-50 h-32">
    <div
      id="navbar"
      class="fixed mt-5 lg:-mt-4 xl:mt-0 w-full top-0 flex px-12 lg:px-16 lg:py-10 xl:px-48 xl:py-10 px-3 justify-between lg:justify-start"
      :class="{
        'text-white': $route.name === 'menu',
        'text-black': $route.name === 'home'
      }"
    >
      <router-link
        class="text-xl lg:mr-12 lg:text-2xl xl:mr-20 xl:text-4xl druk-font"
        to="/#header"
        >Foodies</router-link
      >
      <a
        href="#about"
        class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
        >Acerca de</a
      >
      <a
        href="#locations"
        class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
        >Restaurantes</a
      >
      <router-link
        class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
        to="/menu"
        >Menú</router-link
      >
      <a
        href="#contact"
        class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
        >Contáctanos</a
      >
      <a
        class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font lg:hidden"
        @click="sidebar = true"
        ><img
          class="inline right-arrow xl:w-6"
          :class="{
            'invert': $route.name === 'menu',
          }"
          src="@/assets/svg/menu.svg"
      /></a>
    </div>
    <transition name="drop">
      <!-- Validar en que ruta esta y cambiar de color -->
      <div
        v-if="sidebar"
        class="fixed rounded-b-md w-full h-64 top-0 flex flex-wrap lg:px-16 lg:py-10 xl:px-48 xl:py-10 px-3 justify-between lg:justify-start"
        :class="{
          'bg-black text-white': $route.name === 'menu',
          'bg-white text-black': $route.name === 'home'
        }"
      >
        <div>
          <a class="lg:mr-12 lg:text-2xl xl:mr-20 xl:text-4xl druk-font"
            >Foodies</a
          >
        </div>
        <div>
          <a
            class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
            @click="sidebar = false"
            >x</a
          >
        </div>
        <div class="w-full">
          <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
            >Acerca de</a
          >
        </div>
        <div class="w-full">
          <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
            >Restaurantes</a
          >
        </div>
        <div class="w-full">
          <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
            >Menú</a
          >
        </div>
        <div class="w-full">
          <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
            >Contáctanos</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    sidebar: Boolean
  }
}
</script>
