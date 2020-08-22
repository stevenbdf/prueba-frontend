<template>
  <div class="container">
    <div class="z-50 h-32">
      <div
        id="navbar"
        class="fixed mt-5 lg:-mt-4 xl:mt-0 w-full top-0 flex px-12 lg:px-16 lg:py-10 xl:px-48 xl:py-10 px-3 justify-between lg:justify-start"
      >
        <a class="text-xl lg:mr-12 lg:text-2xl xl:mr-20 xl:text-4xl druk-font"
          >Foodies</a
        >
        <a
          class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
          >Acerca de</a
        >
        <a
          class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
          >Restaurantes</a
        >
        <a
          class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
          >Menú</a
        >
        <a
          class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font hidden lg:block"
          >Contáctanos</a
        >
        <a
          class="lg:mx-2 lg:mt-2 xl:mx-6 xl:mt-3 xl:text-2xl syne-font lg:hidden"
          @click="sidebar = true"
          ><img class="inline right-arrow xl:w-6" src="@/assets/svg/menu.svg"
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
    <div class="content">
      <div
        id="home"
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
            Estamos a punto de descubrir un mundo lleno de sabores y de
            emociones inigualables.
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
      <div id="about" class="w-full flex flex-wrap mb-24 lg:mb-10 xl:mb-20">
        <div class="w-full lg:w-1/2 relative">
          <img
            class="w-full -z-1"
            src="@/assets/images/about.png"
            alt="about"
          />
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
      <div id="locations" class="w-full flex flex-wrap mb-10 xl:mb-20">
        <div class="lg:w-5/12">
          <h1
            class="druk-font ml-12 lg:ml-0 text-5xl md:text-3xl xl:text-5xl mb-4 lg:text-center"
          >
            Estamos para ti
          </h1>
          <div class="w-full flex flex-wrap text-center">
            <div
              class="w-1/2 py-3 btn border-gray flex justify-center"
              @mouseover="hovers.pickup = true"
              @mouseleave="hovers.pickup = false"
              :class="{
                'bg-black': isPickUpActive,
                'dark-400': hovers.pickup
              }"
              @click="toggleLocations(true)"
            >
              <svg
                class="w-1/12 mr-4"
                viewBox="0 0 25 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.4196 5.99095H17.9292L18.5707 1.90466L20.7937 2.33491C21.111 2.39366 21.4146 2.19366 21.4766 1.88416C21.5384 1.57416 21.3336 1.2729 21.0183 1.21215L18.2013 0.666647C18.0458 0.636396 17.8852 0.670647 17.7552 0.760147C17.6256 0.849398 17.5387 0.9869 17.5143 1.14115L16.7531 5.99095H10.5938C10.2724 5.99095 10.0124 6.2467 10.0124 6.5632V8.90222C10.0124 9.21848 10.2724 9.47448 10.5938 9.47448H11.0928L11.2472 10.9807C10.466 10.8545 9.57466 10.7825 8.5548 10.7825C0.463739 10.7825 0.370748 15.3175 0.370748 15.5105C0.370748 15.9633 0.539962 16.3825 0.825544 16.7345C-0.103867 18.2186 -0.261902 19.4916 0.41953 20.2643C0.635749 20.5096 0.923618 20.6738 1.25925 20.7738C1.20132 21.1988 1.19523 21.6973 1.30194 22.2269C0.928191 22.4806 0.681229 22.9124 0.681229 23.4016V24.2436C0.681229 25.0224 1.30524 25.6559 2.07179 25.6559H15.0358C15.7449 25.6559 16.325 25.1134 16.4103 24.4174H21.8593C22.158 24.4174 22.4078 24.1949 22.4378 23.9026L23.9196 9.47398H24.4193C24.7407 9.47398 25.0009 9.21823 25.0009 8.90172V6.5627C25.0012 6.2467 24.741 5.99095 24.4196 5.99095ZM11.1751 7.13521H23.8383V8.33022H23.3941H11.6187H11.1753V7.13521H11.1751ZM8.5548 11.9265C15.4225 11.9265 15.5724 15.3698 15.5752 15.5103C15.5752 16.1013 14.8467 16.6008 13.9842 16.6008H3.12443C2.26184 16.6008 1.5334 16.1013 1.5334 15.5158C1.53645 15.3695 1.68635 11.9265 8.5548 11.9265ZM1.74708 17.4338C2.1536 17.6266 2.62034 17.7451 3.12443 17.7451H13.9844C14.4913 17.7451 14.9603 17.6253 15.3686 17.4311C16.0391 18.5533 16.0381 19.2488 15.8011 19.5148C15.4929 19.8601 14.5208 19.8838 13.0385 19.1546C11.7872 18.5396 10.8412 19.0296 10.0803 19.4246C9.58457 19.6818 9.11631 19.9251 8.5548 19.9251C7.99329 19.9251 7.52478 19.6818 7.02856 19.4246C6.26786 19.0301 5.32295 18.5401 4.07035 19.1546C2.59061 19.8831 1.5954 19.8523 1.29787 19.5143C1.04532 19.2278 1.10757 18.4893 1.74708 17.4338ZM2.43867 21.9888C2.35762 21.5766 2.36957 21.1843 2.42064 20.8548C3.06574 20.7871 3.79798 20.5683 4.5907 20.1783C5.27366 19.8413 5.71143 20.0346 6.48662 20.4368C7.05829 20.7336 7.70568 21.0691 8.55505 21.0691C9.40443 21.0691 10.0518 20.7333 10.6235 20.4368C11.3979 20.0358 11.8347 19.8406 12.5186 20.1783C13.3195 20.5721 14.0497 20.7933 14.6897 20.8613C14.74 21.1921 14.7515 21.5803 14.6709 21.9888H2.43867ZM15.036 24.5119H2.07179C1.94627 24.5119 1.84414 24.3919 1.84414 24.2439V23.4019C1.84414 23.2539 1.94627 23.1334 2.07179 23.1334H15.0358C15.1623 23.1334 15.265 23.2539 15.265 23.4019V23.8429C15.265 23.8439 15.2644 23.8446 15.2644 23.8456C15.2644 23.8469 15.265 23.8474 15.265 23.8486V24.2441C15.2652 24.3916 15.1626 24.5119 15.036 24.5119ZM21.3338 23.2734H16.4149C16.3758 22.8381 16.1474 22.4576 15.8066 22.2269C15.9134 21.7001 15.9078 21.2043 15.8503 20.7776C16.1776 20.6766 16.4591 20.5121 16.6761 20.2686C17.3601 19.4988 17.2091 18.2211 16.2884 16.727C16.5704 16.3763 16.7381 15.9595 16.7381 15.5103C16.7381 15.355 16.6741 12.393 12.4432 11.2387L12.262 9.47448H22.7511L21.3338 23.2734Z"
                  :fill="[isPickUpActive ? 'white' : 'black']"
                />
              </svg>

              <p
                class="syne-font"
                :class="[isPickUpActive ? 'text-white' : 'text-black']"
              >
                Para llevar
              </p>
            </div>
            <div
              class="w-1/2 py-3 btn border-gray flex justify-center"
              @mouseover="hovers.delivery = true"
              @mouseleave="hovers.delivery = false"
              :class="{
                'bg-black': !isPickUpActive,
                'dark-400': hovers.delivery
              }"
              @click="toggleLocations(false)"
            >
              <svg
                class="lg:w-6 xl:w-10 mr-4"
                viewBox="0 0 42 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.43478 0.655901C4.93451 0.655901 4.52898 1.05565 4.52898 1.54876C4.52898 2.04187 4.93451 2.44161 5.43478 2.44161H28.0373L32.7502 9.62629C32.8578 9.78656 33.0194 9.91094 33.2031 9.97509L39.8551 12.4304V21.1916H37.1094C36.8864 19.1867 35.1522 17.6202 33.0616 17.6202C30.971 17.6202 29.2368 19.1867 29.0138 21.1916H17.1818C16.9588 19.1867 15.2247 17.6202 13.1341 17.6202C11.0434 17.6202 9.30928 19.1867 9.08628 21.1916H6.34058V15.8345C6.34058 15.3413 5.93505 14.9416 5.43478 14.9416C4.93451 14.9416 4.52898 15.3413 4.52898 15.8345V22.0845C4.52903 22.552 4.96051 22.9773 5.43478 22.9773H9.29859C9.86241 24.5328 11.3706 25.6559 13.1341 25.6559C14.8975 25.6559 16.4057 24.5328 16.9696 22.9773H29.2261C29.7899 24.5328 31.2981 25.6559 33.0616 25.6559C34.825 25.6559 36.3332 24.5328 36.8971 22.9773H40.7609C41.2351 22.9773 41.6666 22.552 41.6667 22.0845V11.8166C41.6667 11.454 41.4177 11.1042 41.0722 10.9796L34.1231 8.41259L29.2969 1.06048C29.132 0.811633 28.8341 0.653977 28.5326 0.655901H5.43478ZM0.905797 4.22733C0.405525 4.22733 0 4.62707 0 5.12018C0 5.6133 0.405525 6.01304 0.905797 6.01304H13.5676C14.0679 6.01304 14.4734 5.6133 14.4734 5.12018C14.4734 4.62707 14.0679 4.22733 13.5676 4.22733H0.905797ZM1.81159 7.79875C1.31132 7.79875 0.905797 8.19848 0.905797 8.69161C0.905797 9.18473 1.31132 9.58447 1.81159 9.58447H13.5676C14.0679 9.58447 14.4734 9.18473 14.4734 8.69161C14.4734 8.19848 14.0679 7.79875 13.5676 7.79875H1.81159ZM3.62319 11.3702C3.12292 11.3702 2.71739 11.7699 2.71739 12.263C2.71739 12.7562 3.12292 13.1559 3.62319 13.1559H13.5676C14.0679 13.1559 14.4734 12.7562 14.4734 12.263C14.4734 11.7699 14.0679 11.3702 13.5676 11.3702H3.62319ZM13.1341 19.4059C14.3954 19.4059 15.3985 20.3947 15.3985 21.638C15.3985 22.8814 14.3954 23.8702 13.1341 23.8702C11.8727 23.8702 10.8696 22.8814 10.8696 21.638C10.8696 20.3947 11.8727 19.4059 13.1341 19.4059ZM33.0616 19.4059C34.323 19.4059 35.3261 20.3947 35.3261 21.638C35.3261 22.8814 34.323 23.8702 33.0616 23.8702C31.8002 23.8702 30.7971 22.8814 30.7971 21.638C30.7971 20.3947 31.8002 19.4059 33.0616 19.4059Z"
                  :fill="[!isPickUpActive ? 'white' : 'black']"
                />
              </svg>
              <p
                class="syne-font"
                :class="[!isPickUpActive ? 'text-white' : 'text-black']"
              >
                Domicilio
              </p>
            </div>
            <div class="w-full flex justify-center border-gray">
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
                class="py-4 md:py-2 xl:py-4 w-3/5 text-xl md:text-base xl:text-xl"
                placeholder="Buscar nombre o dirección"
              />
            </div>
            <div class="w-full flex flex-wrap justify-center lg:justify-end">
              <!-- Location cards -->
              <div
                class="text-left w-10/12 lg:w-auto mr-4 mt-3 py-2 pl-4 xl:pl-5 pr-24 xl:pr-64 bg-yellow-200"
              >
                <h1 class="syne-font text-2xl md:text-sm xl:text-2xl">
                  Sucursal San Benito
                </h1>
                <h3 class="text-lg md:text-xs xl:text-lg">
                  Abierto de 12:00 m.d. - 9:00 p.m.
                </h3>
                <h3 class="text-lg md:text-xs xl:text-lg">
                  Calle la Reforma #543, Colonia San Benito
                </h3>
              </div>
              <div
                class="text-left w-10/12 lg:w-auto mr-4 mt-3 py-2 pl-4 xl:pl-5 pr-24 xl:pr-64 rounded border border-black"
              >
                <h1 class="syne-font text-2xl md:text-sm xl:text-2xl">
                  Sucursal San Benito
                </h1>
                <h3 class="text-lg md:text-xs xl:text-lg">
                  Abierto de 12:00 m.d. - 9:00 p.m.
                </h3>
                <h3 class="text-lg md:text-xs xl:text-lg">
                  Calle la Reforma #543, Colonia San Benito
                </h3>
              </div>
              <div
                class="text-left w-10/12 lg:w-auto mr-4 mt-3 py-2 pl-4 xl:pl-5 pr-24 xl:pr-64 rounded border border-black"
              >
                <h1 class="syne-font text-2xl md:text-sm xl:text-2xl">
                  Sucursal San Benito
                </h1>
                <h3 class="text-lg md:text-xs xl:text-lg">
                  Abierto de 12:00 m.d. - 9:00 p.m.
                </h3>
                <h3 class="text-lg md:text-xs xl:text-lg">
                  Calle la Reforma #543, Colonia San Benito
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-7/12">
          <!-- Map -->
        </div>
      </div>
      <div
        id="testimonials"
        class="w-full flex flex-wrap justify-center lg:mb-16 xl:mb-32"
      >
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
              Es el mejor lugar al que he venido con mi familia, la comida es
              rica, sirven rápido y te atienden de la mejor manera.
            </p>
          </slide>
          <slide>
            <h1
              class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
            >
              “El mejor lugar para degustar en familia y amigos!”
            </h1>
            <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
              Es el mejor lugar al que he venido con mi familia, la comida es
              rica, sirven rápido y te atienden de la mejor manera.
            </p>
          </slide>
          <slide>
            <h1
              class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
            >
              “El mejor lugar para degustar en familia y amigos!”
            </h1>
            <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
              Es el mejor lugar al que he venido con mi familia, la comida es
              rica, sirven rápido y te atienden de la mejor manera.
            </p>
          </slide>
          <slide>
            <h1
              class="druk-font text-4xl md:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-48 text-center"
            >
              “El mejor lugar para degustar en familia y amigos!”
            </h1>
            <p class="text-center text-xl md:text-base xl:text-3xl xl:mb-10">
              Es el mejor lugar al que he venido con mi familia, la comida es
              rica, sirven rápido y te atienden de la mejor manera.
            </p>
          </slide>
        </carousel>
      </div>
      <div
        id="contact-us"
        class="w-full flex flex-wrap justify-center bg-black z-10 pb-64"
      >
        <div
          class="w-10/12 lg:w-3/4 xl:w-2/4 flex flex-wrap justify-center pb-24"
        >
          <h1
            class="druk-font text-4xl lg:text-2xl xl:text-5xl mb-4 mt-20 xl:mt-40 text-center text-white"
          >
            Cuentanos tu experiencia
          </h1>
          <h3 class="text-center text-white px-12 text-xl xl:text-3xl mb-5">
            Don't miss out on our great offers & Receive deals from all our top
            restaurants via e-mail.
          </h3>
          <div class="w-full lg:w-2/5">
            <label class="text-yellow block mb-1">Nombre y Apellido</label>
            <input
              type="text"
              placeholder="John Doe"
              class="w-full lg:w-10/12 text-white bg-black border border-yellow rounded text-base py-2 pl-4 mr-8 mb-5"
            />
            <label class="text-white block mb-1">Correo electrónico</label>
            <input
              type="text"
              placeholder="j.doe@correo.com"
              class="w-full lg:w-10/12 text-white bg-black border border-white rounded text-base py-2 pl-4 mb-5 lg:mb-0"
            />
          </div>
          <div class="w-full lg:w-3/5">
            <label class="text-white block mb-1">Mensaje</label>
            <textarea
              placeholder="El dia de ahora mi experiencia fue..."
              rows="3"
              class="w-full text-xl border border-white rounded text-white bg-black pl-4 pt-3 pb-6"
            ></textarea>
          </div>
          <div class="w-full flex justify-center lg:justify-end mt-5">
            <button
              class="font-bold bg-yellow p-3 xl:p-4 rounded text-base xl:text-lg"
            >
              Enviar comentarios
            </button>
          </div>
        </div>
      </div>
      <div id="benefits" class="w-full flex flex-wrap justify-center mb-20">
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
              <div class="w-5/12 flex justify-center">
                <img
                  class="mt-3 ml-32 w-3/4 xl:ml-30 xl:w-1/2 -z-1"
                  src="@/assets/svg/yellow-arrow.svg"
                />
              </div>
              <div class="w-5/12 flex justify-center">
                <img
                  class="mt-3 ml-32 w-3/4 xl:w-1/2 flip -z-1"
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
      <div id="footer" class="w-full justify-center">
        <div class="w-full flex flex-wrap justify-between mb-8">
          <div class="w-full md:w-1/4 lg:ml-16">
            <p class="text-4xl md:text-2xl xl:text-4xl druk-font text-center mb-5 md:mb-0">
              Foodies
            </p>
          </div>
          <div class="w-full md:w-auto flex justify-center md:justify-end">
            <img
              class="mr-3 w-1/4 lg:ml-32 xl:w-auto"
              src="@/assets/images/app-store.png"
              alt="app-store"
            />
            <img
              class="w-1/4 xl:w-auto xl:mr-32 md:mr-10 lg:mr-10"
              src="@/assets/images/play-store.png"
              alt="play-store"
            />
          </div>
        </div>
        <div class="w-full flex justify-center">
          <img class="w-11/12" src="@/assets/svg/yellow-line.svg" />
        </div>
        <div class="w-full flex flex-wrap lg:justify-center mt-5">
          <a href="" class="text-gray text-base lg:text-sm w-full md:w-4/12 lg:w-2/12 lg:py-0 lg:mb-6 text-xs py-4 xl:text-base text-center"
            >Conoce nuestras sucursales</a
          >
          <a href="" class="text-gray text-base lg:text-sm w-full md:w-4/12 lg:w-2/12 lg:py-0 lg:mb-6 text-xs py-4 xl:text-base text-center"
            >Acerca de</a
          >
          <a href="" class="text-gray text-base lg:text-sm w-full md:w-4/12 lg:w-2/12 lg:py-0 lg:mb-6 text-xs py-4 xl:text-base text-center"
            >Conoce nuestras sucursales</a
          >
          <a
            href=""
            class="text-gray text-base lg:text-sm w-full md:w-4/12 lg:w-2/12 lg:py-0 lg:mb-6 text-xs py-4 xl:text-base text-center"
            >¿Qué hablan de nosotros?</a
          >
          <a
            href=""
            class="text-gray text-base lg:text-sm w-full md:w-4/12 lg:w-2/12 lg:py-0 lg:mb-6 text-xs py-4 xl:text-base text-center"
            >Contáctanos</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"

export default {
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    isPickUpActive: true,
    sidebar: false,
    hovers: {
      pickup: false,
      delivery: false
    }
  }),
  methods: {
    toggleLocations(value) {
      this.isPickUpActive = value
    }
  }
}
</script>

<style lang="scss">
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

.drop-enter-active {
  animation: dowm-in 0.5s;
}
.drop-leave-active {
  animation: dowm-in 0.5s reverse;
}
@keyframes dowm-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
