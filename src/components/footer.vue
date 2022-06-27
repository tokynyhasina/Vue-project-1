<template>
  <footer class="footer">
    <div class="footer-wrap">
      <div class="logo-footer">
        <img src="../assets/black logo.svg" alt="logo" class="logo" />
      </div>
      <div class="footer-container">
        <h3 class="content">Contact</h3>
        <ul class="list-wrap">
          <li class="list">
            <a href="#" class="link">+945 6544546546</a>
          </li>
          <li class="list">
            <a href="#" class="link">tokynyhasina05@gmail.com</a>
          </li>
        </ul>
      </div>
      <div class="footer-container">
        <h3 class="content">Quick Link</h3>
        <ul class="list-wrap">
          <li class="list">
            <a href="#" class="link">All destination</a>
          </li>
          <li class="list">
            <a href="#" class="link">Recent Offer</a>
          </li>
          <li class="list">
            <a href="#" class="link">Blog</a>
          </li>
        </ul>
      </div>
      <div class="footer-container">
        <h3 class="content">Get In Touch</h3>
        <ul class="site-wrap list-wrap">
          <li class="site">
            <a href="#" class="link">+945 6544546546</a>
          </li>
          <li class="site">
            <a href="#" class="link">tokynyhasina05@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  @apply py-[70px] bg-gray-100;
}
.footer-wrap {
  @apply sm:flex justify-between items-start sm:w-[70%] mx-auto;
}
.logo-footer {
  @apply w-[120px] h-auto object-cover;
}
.logo {
  @apply w-full;
}
.content {
  @apply font-bold text-[23px] text-black;
  font-family: "DM Sans", sans-serif;
}
.list-wrap {
  @apply mt-3;
}
.list {
  @apply mb-[5px];
}
.link {
  @apply text-gray-500 text-[15px] font-[600];
}
@media (max-width: 980px) {
  .footer {
    @apply px-5;
  }
  .footer-wrap {
    @apply flex-col w-full;
  }
  .footer-container {
    @apply mt-[30px];
  }
}
</style>
<script></script>
