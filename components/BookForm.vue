<template>
  <div class="md:max-w-6xl py-4 mx-auto bg-black md:p-8 px-4 w-full">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="p-4">
        <h3 class="text-white uppercase text-2xl">Book <br /> your room</h3>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="p-float-label">
          <Calendar
            v-model="arrivalDate"
            dateFormat="dd/mm/yy"
            inputId="arrival_date"
            showIcon
            class="w-full"
          />
          <label for="arrival_date">Arrival Date</label>
        </span>
        <span class="p-float-label">
          <Calendar
            v-model="depatureDate"
            dateFormat="dd/mm/yy"
            inputId="depature_date"
            showIcon
            class="w-full"
          />
          <label for="depature_date">Depature Date</label>
        </span>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="p-float-label">
          <InputNumber
            v-model="numAdult"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            id="adult-number"
            inputClass="w-full"
            class="w-full"
          />
          <label for="adult-number" class="!left-12">Adult</label>
        </span>
        <span class="p-float-label book-form-input flex-auto">
          <InputNumber
            v-model="numChild"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            id="children-number"
            class="w-full"
            inputClass="w-full"
          />
          <label for="children-number" class="!left-12">Child</label>
        </span>
      </div>
      <div class="flex flex-col space-y-2">
        <span class="p-float-label">
          <InputNumber
            v-model="numRoom"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            id="room-number"
            class="w-full"
            inputClass="w-full"
          />
          <label for="room-number" class="!left-12">Room</label>
        </span>
        <Button label="BOOK NOW" />
      </div>
    </div>
  </div>
</template>
<script setup>
const arrivalDate = ref("");
const depatureDate = ref("");
const numAdult = ref(null);
const numChild = ref(null);
const numRoom = ref(null);
</script>
