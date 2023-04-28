<template>
  <header
    id="header_area"
    class="w-full mx-auto bg-white transition-transform transition-background duration-300 ease-in-out z-50"
    :class="topOfPage ? 'absolute z-5 md:bg-transparent' : 'fixed top-0'"
    >
    <div class="md:max-w-6xl mx-auto bg-white">
      <Menubar
        :model="items"
        class="border-0 flex shadow-none mx-auto items-center justify-between p-4 bg-white"
      >
        <template #start>
          <img
            alt="logo"
            src="~/assets/images/Logo.png"
            height="40"
            class="mr-2"
          />
        </template>
      </Menubar>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "File",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-plus",
        items: [
          {
            label: "Bookmark",
            icon: "pi pi-fw pi-bookmark",
          },
          {
            label: "Video",
            icon: "pi pi-fw pi-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "pi pi-fw pi-external-link",
      },
    ],
  },
  {
    label: "Edit",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Left",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Right",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Center",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Justify",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
  },
]);
const topOfPage = ref(true);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  console.log(topOfPage.value);
});

const handleScroll = () => {
  const nav_offset_top =
    document.querySelector("#header_area").offsetHeight + 50;
  if (document.querySelector("#header_area")) {
    let scroll = window.pageYOffset;
    if (scroll >= nav_offset_top) {
      if (topOfPage.value) topOfPage.value = false;
    } else {
      if (!topOfPage.value) topOfPage.value = true;
    }
  }
};
</script>
