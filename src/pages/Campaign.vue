<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <h1 class="text-2xl font-semibold mb-6">Kampanye Donor Darah</h1>

    <div class="grid md:grid-cols-4 gap-4 mb-6">
      <SummaryCard label="Event Mendatang" value="4" color="bg-red-50"/>
      <SummaryCard label="Sedang Berlangsung" value="1" color="bg-green-50"/>
      <SummaryCard label="Telah Selesai" value="3" color="bg-blue-50"/>
      <SummaryCard label="Total Peserta" value="1069" color="bg-gray-50"/>
    </div>

    <div class="flex gap-2 mb-6">
      <button class="px-3 py-1 rounded-lg border bg-black/5">Semua Event</button>
      <button class="px-3 py-1 rounded-lg border">Akan Datang</button>
      <button class="px-3 py-1 rounded-lg border">Berlangsung</button>
      <button class="px-3 py-1 rounded-lg border">Selesai</button>
    </div>

    <h3 class="font-semibold mb-3">Sedang Berlangsung</h3>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
      <EventCard
        status="Sedang Berlangsung"
        title="Donor Darah Ramadan - Aula Kampus"
        date="15 Oktober 2025 • 07:00 - 14:00 WITA"
        place="Aula Utama Kampus"
        peserta="123"
      />
    </div>

    <h3 class="font-semibold mb-3">Akan Datang</h3>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <EventCard status="Akan Datang" title="Donor Darah RS Pendidikan" date="25 Okt 2025 • 08:00 - 14:00" place="RS Pendidikan" peserta="45" />
      <EventCard status="Akan Datang" title="Event Donor ITK" date="28 Okt 2025 • 09:00 - 15:00" place="Institut Teknologi" peserta="78" />
      <EventCard status="Akan Datang" title="Donor Mobile - Plaza Kampus" date="1 Nov 2025 • 10:00 - 16:00" place="Plaza Kampus" peserta="32" />
    </div>

    <div class="mt-10 rounded-2xl p-8 text-center text-white bg-gradient-to-r from-red-600 to-red-500">
      <p class="mb-3">Tidak menemukan event yang sesuai?</p>
      <button class="px-4 py-2 rounded-lg bg-white text-red-600">Hubungi Panitia Kampus</button>
    </div>
  </section>
</template>

<script setup>
const SummaryCard = (props) => null
const EventCard = (props) => null
</script>
