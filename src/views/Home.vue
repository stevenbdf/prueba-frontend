<template>
  <div class="container">
    <Navbar id="navbar" :sidebar="sidebar" />
    <div class="content">
      <Header id="header" />
      <About id="about" />
      <Locations id="locations" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <Benefits id="benefits" />
      <Footer id="footer" />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import About from "@/components/About"
import Locations from "@/components/Locations"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Benefits from "@/components/Benefits"
import Footer from "@/components/Footer"

export default {
  components: {
    Navbar,
    Header,
    About,
    Locations,
    Testimonials,
    Contact,
    Benefits,
    Footer
  },
  data: () => ({
    isPickUpActive: true,
    hovers: {
      pickup: false,
      delivery: false
    },
    sidebar: false
  }),
  methods: {
    toggleLocations(value) {
      this.isPickUpActive = value
    }
  }
}
</script>
