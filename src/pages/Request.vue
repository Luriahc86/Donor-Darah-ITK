<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-semibold mb-6">Permintaan Darah</h1>

    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <InfoCard title="Cepat & Mudah" desc="Proses pengajuan sekitar 5 menit."/>
      <InfoCard title="Respon 24/7" desc="Tim siap membantu kapan saja."/>
      <InfoCard title="Stok Terjamin" desc="Ketersediaan darah aman dan terpantau."/>
    </div>

    <div class="mb-6 grid md:grid-cols-2 gap-3">
      <button class="border rounded-xl p-4 flex items-start gap-3 bg-red-50">
        <span><b>Perorangan</b><br><small>Untuk kebutuhan pribadi/keluarga</small></span>
      </button>
      <button class="border rounded-xl p-4 flex items-start gap-3 bg-red-50">
        <span><b>Klinik ITK</b><br><small>Untuk institusi kesehatan</small></span>
      </button>
    </div>

    <form class="rounded-2xl border p-6 grid gap-4">
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="text-sm">Nama Lengkap *</label>
          <input class="mt-1 input" placeholder="Nama Pemohon" />
        </div>
        <div>
          <label class="text-sm">Golongan Darah yang Dibutuhkan *</label>
          <select class="mt-1 input">
            <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
            <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
          </select>
        </div>
        <div>
          <label class="text-sm">Nomor Telepon *</label>
          <input class="mt-1 input" placeholder="08xx xxxx xxxx" />
        </div>
        <div>
          <label class="text-sm">Email *</label>
          <input class="mt-1 input" type="email" placeholder="email@kampus.id" />
        </div>
        <div>
          <label class="text-sm">Tanggal Dibutuhkan *</label>
          <input class="mt-1 input" type="date" />
        </div>
        <div>
          <label class="text-sm">Tingkat Urgensi *</label>
          <select class="mt-1 input">
            <option>Normal</option><option>Segera</option><option>Darurat</option>
          </select>
        </div>
      </div>
      <div>
        <label class="text-sm">Keterangan Tambahan</label>
        <textarea class="mt-1 input" rows="4" placeholder="Detail kondisi atau kebutuhan..."></textarea>
      </div>

      <p class="text-xs text-blue-700 bg-blue-50 border border-blue-200 p-3 rounded">
        <b>Catatan:</b> Pastikan data yang Anda masukkan benar. Tim kami akan menghubungi Anda untuk verifikasi.
      </p>

      <button type="button" class="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">Kirim Permintaan</button>
    </form>

    <div class="mt-6 rounded-xl border p-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <span class="text-2xl">📞</span>
        <div>
          <div class="font-semibold">Butuh Bantuan Segera?</div>
          <div class="text-sm text-gray-600">Hotline 24/7 untuk kondisi darurat</div>
        </div>
      </div>
      <a href="tel:05421234567" class="px-4 py-2 rounded-lg bg-red-600 text-white">0542-123-4567</a>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.input { @apply w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-300; }
</style>
