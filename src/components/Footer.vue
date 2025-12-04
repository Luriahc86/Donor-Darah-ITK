<template>
  <footer
    class="mt-16 bg-red-700 text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4">

      <div class="space-y-2">
        <span class="font-semibold">ITK Donor</span>

        <p class="text-sm text-white">
          Platform donor darah kolaborasi civitas ITK untuk mempermudah pendonor dan penerima.
        </p>

        <div class="flex gap-4 pt-2">

          <a
            href="https://instagram.com"
            target="_blank"
            class="footer-social flex items-center gap-2 hover:scale-110 hover:opacity-90 hover:drop-shadow-[0_0_3px_white] transition-all duration-200"
          >
            <Instagram class="w-5 h-5" />
            IG
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            class="footer-social flex items-center gap-2 hover:scale-110 hover:opacity-90 hover:drop-shadow-[0_0_3px_white] transition-all duration-200"
          >
            <Facebook class="w-5 h-5" />
            FB
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            class="footer-social flex items-center gap-2 hover:scale-110 hover:opacity-90 hover:drop-shadow-[0_0_3px_white] transition-all duration-200"
          >
            <Twitter class="w-5 h-5" />
            X
          </a>

        </div>
      </div>

      <div>
        <h4 class="font-semibold mb-3 text-white">Kontak</h4>
        <p class="text-sm text-white">Jl. Soekarno Hatta KM 15, Balikpapan Utara</p>
        <p class="text-sm text-white">Telp: (0542) 123456</p>
        <p class="text-sm text-white">Email: info@donorkampus.id</p>
      </div>

      <div>
        <h4 class="font-semibold mb-3 text-white">Link Cepat</h4>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/tentang-kami" class="footer-link">Tentang</RouterLink></li>
          <li><RouterLink to="/kampanye-donor" class="footer-link">Kampanye Donor</RouterLink></li>
          <li><RouterLink to="/permintaan-darah" class="footer-link">Permintaan Darah</RouterLink></li>
          <li><RouterLink to="/kontak" class="footer-link">Kontak</RouterLink></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-3 text-white">Hotline Darurat 24/7</h4>
        <p class="text-2xl font-bold text-white">0542-123-4567</p>
      </div>
    </div>

    <div class="border-t border-white/20">
      <div class="max-w-6xl mx-auto px-4 py-4 text-xs text-white text-center">
        © 2025 ITK Donor. Semua hak cipta dilindungi.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { Instagram, Facebook, Twitter } from "lucide-vue-next";
</script>

<style scoped>
.footer-social,
.footer-social:hover,
.footer-social:active,
.footer-social:visited,
.footer-social:focus {
  color: white !important;
  text-decoration-color: white !important;
}

.footer-link {
  color: white !important;
  text-decoration: underline transparent;
  transition: .2s;
}

.footer-link:hover {
  color: white !important;
  text-decoration-color: white !important;
}

.router-link-active,
.router-link-exact-active {
  color: white !important;
  text-decoration-color: white !important;
}
</style>
