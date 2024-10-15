<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="bg-black font-pingAR">
    <!-- ========== HEADER ========== -->
    <header
      class="sticky container bg- top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px]"
    >
      <!-- border-b border-[#FFFFFF29]  -->
      <nav
        class="relative max-w-[] w-full py-2.5 xl:ps-48 sm:ps-10 md:flex md:items-center md:justify-between md:py-5 mx-2 lg:mx-auto"
      >
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a
            class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="#"
            aria-label="CountryFood"
          >
            <div class="logos flex gap-3 w-28 h-auto">
              <img src="../assets/images/logo1.png" />
              <img src="../assets/images/logo2.png" />
            </div>
          </a>
          <!-- End Logo -->

          <div class="md:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-floating-dark-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-floating-dark"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-floating-dark"
            >
              <svg
                v-if="!isOpen"
                class="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                v-if="isOpen"
                class="hs-collapse-open:block shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Collapse -->
        <div
          id="hs-navbar-floating-dark"
          :class="isOpen ? 'block text-center ' : 'hidden'"
          class="hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-floating-dark-collapse"
        >
          <div
            class="flex md:mr-14 lg:mr-32 xl:mr-80 flex-col md:flex-row md:items-center lg:justify-between py-2 md:py-0 md:ps-7"
          >
            <div class="uls">
              <a
                class="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                href="#about"
              >
                من نحن</a
              >
              <a
                class="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                href="#merits"
                >مميزاتنا</a
              >
              <a
                class="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                href="#services"
                >ماذا نقدم لك
              </a>
              <a
                class="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                href="#reviews"
                >آراء العملاء</a
              >
              <a
                class="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                href="#download-app"
              >
                حمل التطبيق</a
              >
            </div>
            <div class="button justify-end">
              <a
                class="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#D71F29] font-medium text-sm text-white rounded-full focus:outline-none"
                href="#download-app"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
        <!-- End Collapse -->
      </nav>
    </header>
    <!-- ========== END HEADER ========== -->
  </div>
</template>
