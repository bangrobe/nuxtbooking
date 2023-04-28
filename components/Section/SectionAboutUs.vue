<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
        Welcome to <span class="text-primary">Royal Hotel</span>
        </h2>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet
          molestiae perspiciatis laborum libero corporis nisi sapiente, sint,
          aut commodi animi? Commodi aperiam iusto earum deserunt sed ipsum.
        </p>
        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div
              class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Rooms
              </dt>
              <div class="text-center">
                <Icon
                  name="ic:outline-maps-home-work"
                  class="text-primary text-5xl"
                />
              </div>
              <dd class="text-2xl font-extrabold primary md:text-3xl">1000</dd>
            </div>
            <div
              class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Staffs
              </dt>
              <div class="text-center">
                <Icon
                  name="ic:sharp-manage-accounts"
                  class="text-primary text-5xl"
                />
              </div>
              <dd class="text-2xl font-extrabold primary md:text-3xl">800</dd>
            </div>
            <div
              class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
            >
              <dt class="order-last text-lg font-medium text-gray-500">
                Clients
              </dt>
              <div class="text-center">
                <Icon
                  name="ic:sharp-supervisor-account"
                  class="text-primary text-5xl"
                />
              </div>
              <dd class="text-2xl font-extrabold text-gray-500 md:text-3xl">3000</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
        <img
          class="w-full rounded-lg"
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="office content 1"
        />
        <img
          class="mt-4 w-full lg:mt-10 rounded-lg"
          src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="office content 2"
        />
      </div>
    </div>
  </section>
</template>
