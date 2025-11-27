<template>
  <footer class="mt-16 bg-red-700 text-white">
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4"
    >
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <span class="font-semibold">ITK Donor</span>
        </div>
        <p class="text-sm text-white/90">
          Platform donor darah kolaborasi civitas ITK untuk
          mempermudah pendonor dan penerima.
        </p>
        <div class="flex gap-3 pt-2">
  <a 
    href="https://www.instagram.com/" 
    target="_blank" 
    aria-label="Instagram" 
    class="text-white hover:opacity-80"
  >
    IG
  </a>

  <a 
    href="https://www.facebook.com/" 
    target="_blank" 
    aria-label="Facebook" 
    class="text-white hover:opacity-80"
  >
    FB
  </a>

  <a 
    href="https://twitter.com/" 
    target="_blank" 
    aria-label="Twitter" 
    class="text-white hover:opacity-80"
  >
    X
  </a>
</div>

      </div>

      <div>
        <h4 class="font-semibold mb-3">Kontak</h4>
        <p class="text-sm text-white/90">
Jl. Soekarno Hatta KM 15,Balikpapan Utara,Kalimantan Timur        </p>
        <p class="text-sm text-white/90">Telp: (0542) 123456</p>
        <p class="text-sm text-white/90">Email: info@donorkampus.id</p>
      </div>

      <div>
        <h4 class="font-semibold mb-3">Link Cepat</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/tentang-kami" class="text-white hover:underline"
              >Tentang</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/kampanye-donor" class="text-white hover:underline"
              >Kampanye Donor</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/permintaan-darah"
              class="text-white hover:underline"
              >Permintaan Darah</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/kontak" class="text-white hover:underline"
              >Kontak</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="text-sm">
        <h4 class="font-semibold mb-3">Hotline Darurat 24/7</h4>
        <p class="text-2xl font-bold text-white">0542-123-4567</p>
      </div>
    </div>
    <div class="border-t border-white/20">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/90"
      >
        © 2025 ITK Donor. Semua hak cipta dilindungi.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
