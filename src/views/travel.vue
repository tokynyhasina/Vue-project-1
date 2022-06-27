<template>
  <section>
    <div class="card-container">
      <div class="card">
        <figure class="big-img-wrap">
          <img src="../assets/bg-head.svg" alt="" class="big-img" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            New travel Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio nemo laboriosam voluptatum ratione distinctio iusto.
          </h2>
          <p class="card-pg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            cupiditate veritatis magnam facilis deleniti omnis numquam quae,
            illo sit quod quibusdam, eaque iure. Voluptate officiis dolor
            distinctio sapiente vitae quos?
          </p>
        </div>
        <button class="btn-blue">Read full post</button>
      </div>
      <div class="card-content">
        <div class="card-list">
          <img src="../assets/Maki.jpg" alt="" class="small-img" />
          <p class="card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            architecto
          </p>
        </div>
        <div class="card-list">
          <img src="../assets/Rectangle 8.jpg" alt="" class="small-img" />
          <p class="card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ar
          </p>
        </div>
        <div class="card-list">
          <img src="../assets/bridge.jpg" alt="" class="small-img" />
          <p class="card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ar
          </p>
        </div>
        <div class="card-list">
          <img src="../assets/img1.svg" alt="" class="small-img" />
          <p class="card-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            archit
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card-container {
  @apply sm:w-[70%] mx-auto xl:flex xl:items-start xl:justify-between xl:px-[60px] md:py-[100px];
}

.card {
  @apply xl:w-[620px];
}
.big-img-wrap {
  @apply xl:w-[620px];
}
.big-img {
  @apply w-full;
}
.card-title {
  @apply text-[20px] font-bold text-black mt-10;
  font-family: "DM Sans", sans-serif;
}
.card-pg {
  @apply my-10;
}
.card-content {
  @apply xl:ml-[100px];
}
.card-list {
  @apply flex items-center;
}
.card-list:not(:first-child) {
  @apply mt-4 border-t-[1px] border-gray-300 py-5;
}
.card-txt {
  @apply text-[15px] text-gray-500 font-extrabold ml-4;
}
.small-img {
  @apply w-[100px];
}
@media (max-width: 980px) {
  .card-container {
    @apply w-full px-[15px];
  }
  .card-content {
    @apply mt-[30px];
  }
}
@media (max-width: 1600px) and (max-height: 980px) {
  .card-content {
    @apply mt-[30px];
  }
}
</style>
<script></script>
