<template>
  <section>
    <div class="logo-wrap">
      <img src="../assets/black logo.svg" alt="logo" class="logo" />
      <img src="../assets/logo1.png" alt="logo" class="logo" />
      <img src="../assets/logo2.png" alt="logo" class="logo" />
      <img src="../assets/logo3.png" alt="logo" class="logo" />
      <img src="../assets/logo4.png" alt="logo" class="logo" />
      <img src="../assets/logo5.png" alt="logo" class="logo" />
    </div>
  </section>
</template>

<style scoped>
.logo-wrap {
  @apply flex items-center justify-between overflow-hidden w-[70%] mx-auto pb-[100px];
}
.logo {
  @apply w-[120px];
}

@media (max-width: 980px) {
  .logo-wrap {
    @apply w-[95%] mt-[50px];
  }
  .logo {
    @apply mx-[30px];
    animation: slide ease-in 10s infinite;
  }
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(-120px);
    }
    50% {
      transform: translateX(-240px);
    }
    65% {
      transform: translateX(-360px);
    }
    75% {
      transform: translateX(-540px);
    }
    /* 100% {
    transform: translateX(80px);
  } */
  }
}
</style>
<script></script>
