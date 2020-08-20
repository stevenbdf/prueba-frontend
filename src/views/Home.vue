<template>
  <div class="container">
    <div class="flex lg:px-16 lg:py-10 xl:px-48 xl:py-10">
      <a class="lg:mr-12 lg:text-2xl xl:mr-20 xl:text-4xl druk-font">Foodies</a>
      <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
        >Acerca de</a
      >
      <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
        >Restaurantes</a
      >
      <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font">Menú</a>
      <a class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font"
        >Contáctanos</a
      >
    </div>
    <div class="content">
      <div id="home" class="w-full flex flex-wrap mb-64 lg:px-16 xl:px-48">
        <img
          id="yellow-vector"
          src="@/assets/images/yellow_vector.svg"
          alt="vector"
        />
        <div class="w-1/2">
          <h1 class="druk-font title-size lg:mt-10 xl:mt-24">
            Un nuevo sabor esta en la ciudad
          </h1>
          <p class="lg:mt-2 xl:mt-3">
            Estamos a punto de descubrir un mundo lleno de sabores y de
            emociones inigualables.
          </p>
          <h3 class="syne-font lg:mt-10 xl:mt-12 xl:text-3xl">
            Encuentranos
            <img
              class="inline right-arrow ml-4 xl:w-6"
              src="@/assets/svg/right-arrow.svg"
            />
          </h3>
        </div>
        <div class="w-1/2">
          <img
            class="lg:ml-12 xl:ml-32 xl:mt-24 w-10/12"
            src="@/assets/images/hero_hamburger.png"
            alt="hamburger"
          />
        </div>
      </div>
      <div id="about" class="w-full flex flex-wrap">
        <div class="w-1/2">
          <img id="about-img" src="@/assets/images/about.png" alt="about" />
        </div>
        <div class="w-1/2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/syne");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans");

@font-face {
  font-family: "Druk Text Wide";
  src: url("//db.onlinewebfonts.com/t/3724259186746d86859fbb0fde0fa44a.woff2")
    format("woff2");
}

.noto-sans-font {
  font-family: "Noto Sans", sans-serif;
}

.syne-font {
  font-family: Syne;
  font-weight: bold;
  font-style: normal;
}

.druk-font {
  font-family: Druk Text Wide;
  font-style: normal;
  font-weight: bold;
}

.title-size {
  font-size: 2rem;
}

p {
  font-family: "Noto Sans", sans-serif;
  color: rgba(0, 0, 0, 0.4);
}

@media (min-width: 1024px) {
  .title-size {
    font-size: 3rem;
    line-height: 3.5rem;
  }
}

@media (min-width: 1280px) {
  .title-size {
    font-size: 5rem;
    line-height: 5.5rem;
  }

  p {
    font-size: 1.7rem;
  }
}

#yellow-vector {
  position: absolute;
  width: 48%;
  right: 0;
  top: 0;
  z-index: -1;
}

#about-img {
  background: linear-gradient(
    359.79deg,
    #040404 -13.79%,
    rgba(0, 0, 0, 0) 61.58%
  );
}
</style>
