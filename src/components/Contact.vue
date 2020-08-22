<template>
  <div class="w-full flex flex-wrap justify-center bg-black z-10 pb-64 lg:pb-12">
    <div class="w-10/12 lg:w-3/4 xl:w-2/4 flex flex-wrap justify-center pb-24">
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
</template>
<script>
export default {
  name: "Contact"
}
</script>
