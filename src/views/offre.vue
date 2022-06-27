<template>
  <section class="offre-container">
    <div class="offre-wrap">
      <div class="card-left">
        <h2 class="black-title">
          Choose Our <strong class="blue-title">Best Offre</strong> before it's
          out
        </h2>
        <p class="card-pg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni
          esse velit, unde quasi officiis odit sapiente animi fuga ratione,
        </p>
        <button class="btn-blue">Check All offre</button>
      </div>
      <div class="card-wrap">
        <div class="card">
          <img src="../assets/bridge.jpg" alt="" class="card-img" />
          <div class="card-body">
            <div class="card-title">
              <h2 class="place">Salalah Pahar</h2>
              <p class="price">$250.00</p>
            </div>
            <p class="card-pg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
            </p>
            <div class="star">
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="../assets/baobab.jpg" alt="" class="card-img" />
          <div class="card-body">
            <div class="card-title">
              <h2 class="place">Couple point</h2>
              <p class="price">$250.00</p>
            </div>
            <p class="card-pg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex
            </p>
            <div class="star">
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.offre-container {
  @apply pt-28 pb-72 bg-blue-50;
}
.btn-blue {
  @apply mt-[30px] w-[200px] py-4;
}
.offre-wrap {
  @apply xl:flex items-center justify-between mx-auto w-[70%];
}

.card-left {
  @apply xl:w-[45%];
}
.card-wrap {
  @apply sm:flex;
}
.card {
  @apply w-[260px] shadow-2xl;
}
.card:nth-child(2) {
  @apply ml-[40px] translate-y-[40px];
}
.card-img {
  @apply w-full h-[360px] object-cover;
}
.card-body {
  @apply py-[30px] px-[15px] bg-white;
}
.card-title {
  @apply flex items-center justify-between;
}
.place {
  @apply font-bold text-black text-[18px];
}
.card-pg {
  @apply my-4;
}
.price {
  @apply font-bold text-blue-400 text-[18px];
}
.star-list {
  @apply text-yellow-400 text-[15px] mr-[5px];
}

@media (max-width: 980px) {
  .offre-wrap {
    @apply w-full px-[15px];
  }
  .card-wrap {
    @apply mt-[30px] items-center;
  }
}
@media (max-width: 1600px) and (max-height: 980px) {
  .card-wrap {
    @apply mt-[30px] justify-center;
  }
}
</style>
<script></script>
