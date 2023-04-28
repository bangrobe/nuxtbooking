<template>
  <div
    class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8"
  >
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16"
    >
      <div class="max-w-xl ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Don't just take our word for it...
          <br class="hidden sm:block lg:hidden" />
          Read reviews from our customers
        </h2>

        <p class="mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          veritatis illo placeat harum porro optio fugit a culpa sunt id!
        </p>
      </div>
      <div class="lg:col-span-2">
        <Carousel
          :value="testimonials"
          :numVisible="2"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="5000"
          :showIndicators="false"
          :showNavigators="false"
        >
          <template #item="slotProps">
            <div class="m-2">
              <div class="mb-3">
                <Rating v-model="slotProps.data.rating" />
                <p class="text-sm text-gray-500">
                    {{ slotProps.data.content }}
                </p>
                <p> -- {{ slotProps.data.name }}</p>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script setup>
const testimonials = [
    {
        name: "John Doe",
        rating: 5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!"
    },
    {
        name: "Jane Doe",
        rating: 4.5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!"
    },
    {
        name: "John China",
        rating: 5,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!"
    }
]

const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>