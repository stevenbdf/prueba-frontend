<template>
  <div class="container">
    <img
      class="absolute -z-1 w-full"
      src="@/assets/images/Rectangle2.png"
      alt="hamburger"
    />
    <Navbar id="navbar" :sidebar="sidebar" />
    <div class="content">
      <HeaderMenu id="headerMenu" />
      <div class="w-full flex flex-wrap mb-8">
        <div class="w-4/12 flex justify-center">
          <div class="w-3/4 flex border-gray rounded-md">
            <svg
              class="my-auto mr-4 w-5 xl:w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.9999 21L16.6499 16.65"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="text"
              class="py-4 md:py-2 xl:py-4 w-3/5 text-xl md:text-base xl:text-xl "
              placeholder="Buscar tu platillo favorito"
            />
          </div>
        </div>
        <div class="w-8/12 flex justify-end pt-2 xl:pr-16">
          <span class="syne-font xl:text-2xl mr-8">
            Todas
          </span>
          <span
            class="syne-font xl:text-2xl mr-8"
            v-for="category in $store.getters.categories"
            :key="category.id"
          >
            {{ category.name }}
          </span>
        </div>
      </div>
      <div class="w-full flex flex-wrap justy-start px-6 xl:px-16 mb-8">
        <div
          v-for="item in $store.getters.menu"
          :key="item.id"
          class="w-full md:w-1/2 lg:w-3/12 rounded-md p-3 xl:p-5"
        >
          <img class="w-full rounded-md" :src="item.image" />
          <h1 class="syne-font text-2xl my-2 ml-4">{{ item.name }}</h1>
          <p class="noto-font text-lg my-2 ml-4">
            {{ item.description }}
          </p>
          <div class="w-full flex justify-between">
            <div class="w-1/2">
              <p class="noto-font text-sm mt-6 ml-4">
                {{ item.category }}
              </p>
            </div>
            <div>
              <p
                class="druk-font text-sm mt-6 mr-4 text-black bg-yellow border rounded-md"
              >
                ${{ item.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer id="footer" />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar"
import HeaderMenu from "@/components/HeaderMenu"
import Footer from "@/components/Footer"
import axios from "axios"

export default {
  components: {
    Navbar,
    HeaderMenu,
    Footer
  },
  data: () => ({
    sidebar: false
  }),
  // Fetches posts when the component is created.
  created() {
    axios
      .get("https://api.elaniin.dev/api/menu")
      .then(response => {
        this.$store.commit("fetchMenu", response.data.data)
      })
      .catch(e => {
        this.errors.push(e)
      })

    axios
      .get("https://api.elaniin.dev/api/categories")
      .then(response => {
        this.$store.commit("fetchCategories", response.data.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
