<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-semibold mb-6">Kontak & Bantuan</h1>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
      <Info icon="📍" title="Alamat" text="Jl. Pendidikan No. 1, Kampus Merdeka" />
      <Info icon="☎️" title="Telepon" text="(0542) 123-4567 / 0812-3456-7890" />
      <Info icon="✉️" title="Email" text="info@donorkampus.id" />
      <Info icon="⏰" title="Jam Operasional" text="Senin–Jumat 08:00–16:00 • Sabtu 08:00–12:00" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <form class="rounded-2xl border p-6 grid gap-4 bg-white">
        <div>
          <label class="text-sm">Nama Lengkap *</label>
          <input class="input mt-1" placeholder="Nama Anda" />
        </div>
        <div>
          <label class="text-sm">Email *</label>
          <input class="input mt-1" type="email" placeholder="email@kampus.id" />
        </div>
        <div>
          <label class="text-sm">Subjek *</label>
          <input class="input mt-1" placeholder="Perihal pesan" />
        </div>
        <div>
          <label class="text-sm">Pesan *</label>
          <textarea class="input mt-1" rows="5" placeholder="Tulis pesan Anda..."></textarea>
        </div>
        <button class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Kirim Pesan</button>
      </form>

      <div class="rounded-2xl border p-4 sm:p-6 bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63824.23609122917!2d116.79008582167968!3d-1.149949499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0x8489d5309f45c0db!2sKalimantan%20Institute%20of%20Technology!5e0!3m2!1sen!2sid!4v1763054624864!5m2!1sen!2sid"
          width="100%"
          height="350"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="rounded-2xl border p-6">
        <div class="font-semibold mb-2">Ikuti Kami</div>
        <p class="text-sm text-gray-600 mb-4">Update event donor dan info kesehatan</p>

        <div class="flex flex-wrap gap-3">
          <a href="https://instagram.com/" target="_blank" class="px-3 py-1 rounded border">IG</a>
          <a href="https://facebook.com/" target="_blank" class="px-3 py-1 rounded border">FB</a>
          <a href="https://twitter.com/" target="_blank" class="px-3 py-1 rounded border">X</a>
        </div>
      </div>

      <div class="rounded-2xl border p-6 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div class="text-sm opacity-90">Hotline Darurat 24/7</div>
        <div class="text-2xl font-bold">(0542) 123-4567</div>
        <div class="opacity-90 text-sm">Untuk kebutuhan darah mendesak</div>
      </div>

      <div class="rounded-2xl border p-6">
        <div class="font-semibold mb-3">FAQ Singkat</div>
        <ul class="space-y-2 text-sm text-gray-700">
          <li><b>Siapa yang boleh donor?</b> Usia 17–65, sehat, ≥45 kg.</li>
          <li><b>Proses donor berapa lama?</b> ±45 menit termasuk pemeriksaan.</li>
          <li><b>Berbahaya?</b> Tidak. Alat steril sekali pakai & tenaga medis.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const Info = (props) => null
</script>

<style scoped>
.input {
  @apply w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300;
}
</style>
