<div class="h-screen grid justify-center items-center bg-rose-200">

  <div class="banner bg-gray-50 rounded-full px-12 py-4 text-center shadow-md">
    <h1 class="text-3xl font-bold">Svelte + TailwindCSS</h1>
    <h2>just another template | <a href="https://github.com/joseph-bravo/svelte-tailwind">github</a></h2>
  </div>

</div>

<style>
  a {
    @apply text-red-900 hover:brightness-125;
  }

  .banner::before {
    animation: pulse 0.5s;
  }

  @keyframes pulse {
    0% {
      @apply bg-black;
    }
    100% {
      @apply bg-white;
    }
  }

</style>
