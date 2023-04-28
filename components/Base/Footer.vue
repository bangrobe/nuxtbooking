<template>
  <footer aria-label="Site Footer" class="bg-gray-900">
    <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md">
        <strong
          class="block text-center text-xl font-bold text-white sm:text-3xl"
        >
          Want us to email you with the latest promotions?
        </strong>

        <form class="mt-6">
          <div class="relative max-w-lg">
            <label class="sr-only" for="email"> Email </label>

            <input
              class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
              id="email"
              type="email"
              placeholder="john@doe.com"
            />

            <button
              class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
        <div class="mx-auto max-w-sm lg:max-w-none">
          <p class="mt-4 text-center text-gray-200 lg:text-left lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium natus quod eveniet aut perferendis distinctio iusto
            repudiandae, provident velit earum?
          </p>

          <div class="mt-6 flex justify-center gap-4 lg:justify-start">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Facebook </span>
              <Icon name="ic:baseline-facebook" class="text-gray-200 transition hover:text-gray-300 text-2xl" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Instagram </span>
              <Icon name="ri:instagram-line" class="text-gray-200 transition hover:text-gray-300 text-2xl" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Youtube </span>
              <Icon name="ion:social-youtube-outline" class="text-gray-200 transition hover:text-gray-300 text-2xl" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Tiktok </span>
              <Icon name="ic:baseline-tiktok" class="text-gray-200 transition hover:text-gray-300 text-2xl" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Linkedin </span>
              <Icon name="ri:linkedin-fill" class="text-gray-200 transition hover:text-gray-300 text-2xl" />
            </a>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left"
        >
          <div>
            <strong class="font-medium text-gray-200"> Helpful Links </strong>

            <nav
              aria-label="Footer Services Nav"
              class="mt-6 flex flex-col space-y-1"
            >
              <NuxtLink

                class="text-gray-300 transition hover:text-gray-200"
                to="/"
              >
                Home
              </NuxtLink>
              <NuxtLink
                class="text-gray-300 transition hover:text-gray-200"
                to="/about"
              >
                About Us
              </NuxtLink>
              <NuxtLink
                class="text-gray-300 transition hover:text-gray-200"
                to="/services"
              >
                Services
              </NuxtLink>
              <NuxtLink
                class="text-gray-300 transition hover:text-gray-200"
                to="/account"
              >
                Account
              </NuxtLink>
            </nav>
          </div>

          <div>
            <strong class="font-medium text-gray-200">Services</strong>

            <nav
              aria-label="Footer About Nav"
              class="mt-6 flex flex-col space-y-1"
            >
              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                Food & Restaurant
              </a>
              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                Spa & Fitness
              </a>
              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                Event & Party
              </a>
              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                Gym & Sport
              </a>
            </nav>
          </div>

          <div>
            <strong class="font-medium text-gray-200"> Support </strong>

            <nav
              aria-label="Footer Support Nav"
              class="mt-6 flex flex-col space-y-1"
            >
              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                FAQs
              </a>

              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                Contact
              </a>

              <a
                class="text-gray-300 transition hover:text-gray-700/75"
                href="/"
              >
                Live Chat
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div class="mt-16 border-t border-gray-100 pt-8">
        <p class="text-center text-xs/relaxed text-gray-500">
          © bangdigi.one 2023. All rights reserved.

          <br />

          Created with
          <a
            href=""
            class="text-gray-700 underline transition hover:text-gray-700/75"
            >Django</a
          >
          and
          <a
            href=""
            class="text-gray-700 underline transition hover:text-gray-700/75"
            >Nuxt 3</a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>
