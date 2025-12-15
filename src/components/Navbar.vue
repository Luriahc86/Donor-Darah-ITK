<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2">
       <img
        src="../assets/logo.png"
        class="rounded-2xl w-full h-[60px]"
      />
      </RouterLink>

      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li><RouterLink :to="{name:'Home'}" class="nav-link">Beranda</RouterLink></li>
        <li><RouterLink :to="{name:'About'}" class="nav-link">Tentang Kami</RouterLink></li>
        <li><RouterLink :to="{name:'Campaign'}" class="nav-link">Kampanye Donor</RouterLink></li>
        <li><RouterLink :to="{name:'Request'}" class="nav-link">Permintaan Darah</RouterLink></li>
        <li><RouterLink :to="{name:'Contact'}" class="nav-link">Kontak & Bantuan</RouterLink></li>
        <li><RouterLink :to="{name:'Author'}" class="nav-link">Tentang Pembuat</RouterLink></li>       
      </ul>

      <RouterLink
  to="/permintaan-darah"
  class="md:inline-flex items-center justify-center px-4 py-2 rounded-lg
         bg-red-600 text-white 
         hover:bg-white hover:text-red-600 hover:border hover:border-red-600
         active:bg-white active:text-red-600 active:border active:border-red-600
         transition">
  Donor Sekarang
</RouterLink>


      <button class="md:hidden inline-flex p-2 rounded hover:bg-gray-100" @click="open = !open" aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </nav>

    <div v-show="open" class="md:hidden border-t">
      <div class="px-4 py-3 space-y-2">
        <RouterLink @click="close" class="mobile-link" :to="{name:'Home'}">Beranda</RouterLink>
        <RouterLink @click="close" class="mobile-link" :to="{name:'About'}">Tentang Kami</RouterLink>
        <RouterLink @click="close" class="mobile-link" :to="{name:'Campaign'}">Kampanye Donor</RouterLink>
        <RouterLink @click="close" class="mobile-link" :to="{name:'Request'}">Permintaan Darah</RouterLink>
        <RouterLink @click="close" class="mobile-link" :to="{name:'Contact'}">Kontak & Bantuan</RouterLink>
        <RouterLink @click="close" class="mobile-link" :to="{name:'Author'}">Tentang Pembuat</RouterLink>     
        <RouterLink @click="close" to="/permintaan-darah" class="block text-center px-4 py-2 rounded-lg bg-red-600 text-white">Donor Sekarang</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const open = ref(false)
const close = () => (open.value = false)
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-red-600 transition;
}
.router-link-active.nav-link {
  @apply text-red-600 font-semibold;
}
.mobile-link {
  @apply block py-2 text-gray-700 hover:text-red-600;
}
</style>
