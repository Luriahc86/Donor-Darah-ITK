<template>
  <section
    class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center"
  >
    <div data-aos="fade-right">
      <h1 class="text-3xl font-bold mb-4 text-gray-800">Tentang Kami</h1>
      <p class="text-gray-600 leading-relaxed">
        <span class="font-semibold text-red-600"
          >Donor Darah Kampus Merdeka</span
        >
        adalah platform digital yang memfasilitasi proses donor darah,
        pengelolaan stok, serta informasi kegiatan donor di lingkungan kampus
        dan mitra kolaboratif.
      </p>
      <p class="text-gray-600 leading-relaxed mt-3">
        Kami berkomitmen untuk menyelamatkan lebih banyak nyawa melalui
        kemudahan akses, transparansi data, dan edukasi kepada masyarakat
        kampus.
      </p>
    </div>

    <div data-aos="fade-left">
      <img
        src="../assets/about-image.jpg"
        alt="Tentang Kami"
        class="rounded-2xl w-full h-[320px] object-cover shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
  </section>

  <section
    class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8"
  >
    <div
      class="rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
      data-aos="fade-up"
    >
      <div class="text-3xl mb-3"></div>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Visi</h3>
      <p class="text-gray-600 leading-relaxed">
        Menjadi sistem donor darah terbaik di ekosistem Kampus Merdeka yang
        menjamin ketersediaan darah untuk seluruh sivitas akademika dan
        masyarakat umum.
      </p>
    </div>

    <div
      class="rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 p-6 shadow-sm hover:shadow-md transition-all duration-300"
      data-aos="fade-up"
    >
      <div class="text-3xl mb-3"></div>
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Misi</h3>
      <ul class="list-disc pl-5 space-y-1 text-gray-700">
        <li>
          Meningkatkan kesadaran pentingnya donor darah di kalangan mahasiswa.
        </li>
        <li>Menyediakan akses cepat dan mudah untuk melakukan donor.</li>
        <li>Menjamin kualitas serta keamanan darah yang didonorkan.</li>
        <li>Menjalin kemitraan strategis dengan fasilitas kesehatan.</li>
      </ul>
    </div>
  </section>

  <section class="bg-red-50 py-14">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-8">Nilai-Nilai Kami</h2>

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
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Kemitraan</h2>
    <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
      Kami bekerja sama dengan berbagai institusi dan lembaga kesehatan untuk
      memastikan proses donor darah berjalan aman, cepat, dan terpercaya.
    </p>

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
    icon: "❤️",
    title: "Kemanusiaan",
    desc: "Mengutamakan kemanusiaan dalam setiap tindakan.",
  },
  {
    icon: "🤝",
    title: "Kebersamaan",
    desc: "Mendorong kolaborasi antar civitas akademika.",
  },
  {
    icon: "💉",
    title: "Profesional",
    desc: "Menjaga standar keamanan dan pelayanan terbaik.",
  },
  {
    icon: "🧭",
    title: "Integritas",
    desc: "Transparan, bertanggung jawab, dan beretika.",
  },
];

const partners = [
  "PMI Kota",
  "RS Pendidikan",
  "Fakultas Kedokteran",
  "Dinas Kesehatan",
  "Unit Kegiatan Mahasiswa",
  "Organisasi Sosial Kampus",
];
</script>

<style scoped>
section {
  scroll-margin-top: 5rem;
}
</style>
