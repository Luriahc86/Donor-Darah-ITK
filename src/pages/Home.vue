<template>
  <section class="bg-transparent text-inherit">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="max-w-2xl">
      <h1 class="text-3xl md:text-4xl font-bold mb-3 text-red-600">
        Satu Tetes Darah Anda, Harapan Baru Untuk Mereka
      </h1>

      <p class="opacity-90 mb-6">
        Bergabunglah dengan ribuan pendonor di komunitas Kampus Merdeka untuk menyelamatkan nyawa. 
        Setiap kontribusi Anda sangat berarti.
      </p>

      <div class="flex gap-3">
        <RouterLink 
          to="/permintaan-darah" 
          class="px-4 py-2 rounded-lg bg-white text-red-700 hover:bg-red-50"
        >
          Donor Sekarang
        </RouterLink>

        <RouterLink 
          to="/kampanye-donor" 
          class="px-4 py-2 rounded-lg bg-white text-red-700 hover:bg-red-50"
        >
          Lihat Jadwal Event
        </RouterLink>
      </div>
    </div>
  </div>
</section>


  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-4 md:grid-cols-4">
    <Stat label="Pendonor Aktif" value="2,847" icon="❤️"/>
    <Stat label="Total Donasi" value="5,621" icon="🩸"/>
    <Stat label="Event per Tahun" value="48" icon="📅"/>
    <Stat label="Nyawa Terselamatkan" value="156" icon="🌟"/>
  </section>

  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <h2 class="text-xl font-semibold mb-4">Stok Darah Tersedia</h2>
    <div class="grid gap-4 md:grid-cols-5">
      <BloodCard type="A+" jumlah="234" status="Aman"/>
      <BloodCard type="B+" jumlah="189" status="Terbatas"/>
      <BloodCard type="O+" jumlah="312" status="Aman"/>
      <BloodCard type="AB+" jumlah="87" status="Kritis"/>
      <button class="col-span-full md:col-span-5 border rounded-lg py-2 hover:bg-gray-50">Lihat Semua Golongan Darah</button>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="rounded-2xl p-6 bg-red-600 text-white border border-red-700">
    <h3 class="text-center text-lg font-semibold mb-2">
      Mengapa Donor Darah Penting?
    </h3>

    <p class="text-center opacity-90 mb-6">
      Setiap 2 detik, seseorang membutuhkan transfusi darah. Donor dapat menyelamatkan hingga 3 nyawa.
    </p>

    <div class="grid gap-4 md:grid-cols-3">
      <Benefit icon="🧴" title="Aman & Steril" desc="Proses donor alat steril sekali pakai." />
      <Benefit icon="👩‍⚕️" title="Tim Profesional" desc="Didampingi tenaga medis berpengalaman." />
      <Benefit icon="💪" title="Manfaat Kesehatan" desc="Donor rutin baik untuk kesehatan." />
    </div>
  </div>
</section>


  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h3 class="text-center text-lg font-semibold mb-6">Kata Mereka</h3>
    <div class="grid gap-4 md:grid-cols-3">
      <Testi name="Budi Santoso" role="Pendonor Rutin" text="Donor darah bukan hanya tentang memberi, tapi juga tentang berbagi harapan."/>
      <Testi name="Siti Rahmawati" role="Pendonor Baru" text="Prosesnya mudah dan aman. Terima kasih tim medis!"/>
      <Testi name="Ahmad Hidayat" role="Pendonor Reguler" text="Setiap tetes darah bisa menyelamatkan nyawa."/>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <div class="rounded-2xl p-8 bg-gradient-to-r from-red-600 to-red-500 text-white text-center">
      <h3 class="text-xl font-semibold mb-3">Siap Menjadi Pendonor?</h3>
      <RouterLink to="/kampanye-donor" class="inline-block px-5 py-2 rounded-lg bg-white text-red-600 hover:bg-red-50">Daftar Donor Sekarang</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const Stat = (props) => null
const BloodCard = (props) => null
const Benefit = (props) => null
const Testi = (props) => null
</script>

<style scoped>
</style>
