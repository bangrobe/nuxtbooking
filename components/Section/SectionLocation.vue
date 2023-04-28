<template>
  <Carousel
    :value="locations"
    :numVisible="3"
    :numScroll="3"
    :responsiveOptions="responsiveOptions"
    circular :autoplayInterval="5000"
    :showIndicators = false
    :showNavigators = false
  >
    <template #item="slotProps">
      <div
        class="m-2 text-center"
      >
        <div class="mb-3 relative">
          <img
            :src="
              slotProps.data.image
            "
            :alt="slotProps.data.name"
            class="w-full rounded-lg"
          />
          <h4 class="absolute bottom-10 left-10 text-white text-4xl font-bold">{{ slotProps.data.name }}</h4>
        </div>
      </div>
    </template>
  </Carousel>
</template>
<script setup>
const locations = [
    {
      name: "Paris",
      image: "https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }, {
      name: "Amsterdam",
      image: "https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Berlin",
      image: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "London",
      image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "New York",
      image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Tokyo",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>
