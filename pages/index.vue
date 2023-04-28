<template>
  <section :style="{'background-image': 'url(' + bgUrl + ')'}" class="w-full h-screen bg-cover flex items-center justify-center relative">
    <div class="text-center max-w-2xl flex flex-col space-y-4 items-center">
      <h3 class="text-white">AWAY FROM MONOTONOUS FILE</h3>
      <h2 class="text-white md:text-6xl font-bold">Relax your mind</h2>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam, obcaecati ratione voluptate quisquam inventore eaque nostrum odit.</p>
      <Button label="GET STARTED" class="w-fit" />
    </div>
  </section>
  <div class="md:absolute md:bottom-0 mx-auto items-center flex w-full">
    <BookForm />
  </div>
  <section class="md:max-w-6xl mx-auto my-4">
    <SectionAboutUs />
  </section>
  <section class="md:max-w-6xl mx-auto my-4 py-10">
    <SectionRooms />
  </section>
  <section>
    <SectionFacilities />
  </section>
  <section class="bg-white my-8">
    <SectionTestimonials />
  </section>
</template>
<script setup>
const bgUrl = 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
</script>