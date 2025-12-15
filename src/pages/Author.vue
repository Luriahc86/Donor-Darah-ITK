<template>
  <section
    class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center"
  >
    <div data-aos="fade-right">
      <h1 class="text-3xl font-bold mb-4 text-gray-800">Luriahc</h1>
      <p class="text-gray-600 leading-relaxed">
        
        Nama Saya adalah Faqih Chairul Anam yang merupakan Mahasiswa Informatika 2023
      </p>
      <p class="text-gray-600 leading-relaxed mt-3">
        Tujuan saya membuat Platform ini agar memudahkan 22 Program studi yang ada di 
        ITK dalam mengakses Event Donor Darah di dalam kampus perjuangan
      </p>
    </div>

    <div data-aos="fade-left">
      <img
        src="../assets/about-author.jpg"
        alt="Tentang Kami"
        class="rounded-2xl w-full h-[320px] object-cover shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  </section>

  <section
    class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8"
  >
  </section>

  <section class="bg-red-50 py-14">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-8">Pengalaman Saya</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(val, i) in values"
          :key="i"
          class="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <div class="text-3xl mb-2">{{ val.icon }}</div>
          <h4 class="font-semibold text-gray-800 mb-1">{{ val.title }}</h4>
          <p class="text-sm text-gray-600">{{ val.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">

    <div class="flex flex-wrap justify-center gap-4">
      <span
        v-for="(partner, index) in partners"
        :key="index"
        class="px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm hover:bg-red-50 hover:border-red-200 transition"
      >
        {{ partner }}
      </span>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: "UI/UI Design",
    desc: "Membuat UI/UX Design pada aplikasi Beyond By BSI",
  },
  {
    title: "AI",
    desc: "Mengintegrasikan Computer Vision pada Web pendeteksi Lantai Kotor",
  },
  {
    title: "Documentation",
    desc: "Membuat dokumentasi untuk menjalankan program",
  },
  {
    title: "Frontend",
    desc: "Membuat Frontend pada website SCMS",
  },
];


</script>

<style scoped>
section {
  scroll-margin-top: 5rem;
}
</style>
