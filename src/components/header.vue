<template>
  <header>
    <div class="header-wrap">
      <div class="logo-wrap">
        <img src="../assets/Dagoko.svg" alt="logo" class="logo" />
      </div>
      <div class="overlay"></div>
      <nav class="nav-wrap">
        <ul class="nav">
          <router-link to="/" class="nav-list">Home</router-link>
          <router-link to="/destination" class="nav-list">Destination</router-link>
          <router-link to="/about" class="nav-list">About Us</router-link>
          <router-link to="/sign_in" class="nav-list sign-in">Sign In</router-link>
        </ul>
      </nav>
      <div class="toggle" @click="toggle()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header-wrap {
  @apply flex items-center justify-around w-full mx-auto absolute left-0 top-0 z-50;
}

.logo-wrap {
  @apply w-[150px] h-auto;
}

.logo {
  @apply w-full object-cover translate-y-[10px];
}

.overlay {
  @apply hidden;
}
.nav-list {
  @apply ml-[45px] text-white text-[17px];
}

.sign-in {
  @apply bg-blue-500 py-[10px] px-8 rounded;
}

.nav {
  @apply flex items-center justify-evenly;
}
.toggle {
  @apply w-[60px]  border-2 p-2 rounded;
}
.bar {
  @apply w-full h-[2px] bg-white block;
}
.bar:nth-child(2) {
  @apply my-3;
}
.toggle {
  @apply hidden;
}
/* Responsive Of this section */

@media (max-width: 980px) {
  .header-wrap {
    @apply justify-between px-[50px];
  }
  .overlay {
    @apply h-screen bg-black opacity-50 fixed top-0 left-0 w-full overflow-hidden;
  }
  .overlay.show {
    @apply block duration-300;
  }
  .toggle {
    @apply block absolute right-[50px] z-[1002];
  }
  .toggle.cross {
    @apply border-0;
  }
  .toggle.cross span:nth-child(1) {
    @apply absolute top-[20px] left-0 rotate-[45deg] duration-500 ease-in-out;
  }
  .toggle.cross span:nth-child(2) {
    @apply opacity-0;
  }
  .toggle.cross span:nth-child(3) {
    @apply absolute top-[20px] left-0 rotate-[-45deg] duration-500 ease-in-out;
  }
  .logo-wrap {
    @apply w-[190px];
  }
  /* .nav-wrap {
    @apply relative;
  } */
  .nav {
    @apply absolute flex-col items-start h-screen bg-black top-0 w-full right-0 w-[360px] z-[1000] translate-x-[100%] duration-500;
  }
  .nav.nav-toggle {
    @apply translate-x-0;
  }
  .sign-in {
    @apply w-[150px];
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggle() {
      let nav = document.querySelector(".nav");
      let toggle = document.querySelector(".toggle");
      let overlay = document.querySelector(".overlay");
      nav.classList.toggle("nav-toggle");
      toggle.classList.toggle("cross");
      overlay.classList.toggle("show");
    },
  },
};
</script>
