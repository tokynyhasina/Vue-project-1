<template>
  <section>
    <div class="destination">
      <h2 class="black-title">Explore & Go</h2>
      <button class="btn-blue">All destination</button>
    </div>
    <div class="info-destination">
      <div
        class="card-info bg-black"
        v-for="(destination, index) in destinations"
        :key="`i-${index}`"
      >
        <div class="card-img-wrap">
          <img :src="destination.img" alt="card-img" />
        </div>
        <div class="card-text">
          <h2 class="card-title">{{ destination.ville }}</h2>
          <p class="card-pg">100 km from muskate</p>
        </div>
        <div class="info-travel">
          <p class="card-pg">Muskate, Oman</p>
          <h2 class="card-title">{{ destination.ville }}</h2>
          <p class="card-pg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae deserunt
            deleniti ratione nemo nihil veniam
          </p>
          <div class="card-price">
            <p class="price-pg">${{ destination.price }}.00</p>
            <p class="price-pg">3 days(1 Night)</p>
          </div>
          <button class="btn-blue">Book Now</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.destination {
  @apply px-[60px];
}
.info-destination {
  @apply flex w-full m-auto mr-0 overflow-hidden mt-12 overflow-hidden py-9;
}

.slide-i-wrap {
  @apply flex items-center;
}

.icon-slid {
  @apply p-2 text-blue-400 border-[1px] border-blue-400 cursor-pointer mr-2;
}

.icon-slid:hover {
  @apply bg-blue-400 text-white;
}

.card-info {
  @apply relative w-[400px] mr-7 shadow-lg shadow-black translate-x-[-50%];
}
.card-info:hover {
  /* transform: scale(1.1); */
  @apply duration-500 ease-in z-50;
}
.card-info:hover .info-travel {
  @apply block duration-500;
}

.card-info:hover .card-text {
  @apply hidden duration-500;
}

.card-text {
  @apply absolute top-[85%] left-[5%] duration-500 ease-out;
}
.card-title {
  @apply text-white font-bold text-[25px];
  font-family: "DM Sans", sans-serif;
}
.info-travel {
  @apply absolute left-0 top-[35%] px-8 hidden right-0  duration-500 ease-out;
}

.card-img-wrap {
  @apply w-[360px];
}
img {
  @apply w-full h-[500px] object-cover;
}
.card-pg {
  @apply text-white text-[15px];
}
.card-price {
  @apply flex justify-between my-7;
}

.price-pg {
  @apply text-white text-[18px] font-bold;
}
.btn-blue {
  @apply mt-7 w-[200px] bg-blue-400 border-0 px-[30px] py-[12px] text-white text-[18px];
}
@media (max-width: 980px) {
  .info-destination {
    @apply my-[70px];
  }
  img {
    @apply h-[400px];
  }
  .info-travel {
    @apply top-[15%] block;
  }
  .card-text {
    @apply top-[78%] hidden;
  }
} ;
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: [],
      image: "",
      destinations: [],
    };
  },
  methods: {},
  mounted() {
    // try {
    //   fetch("data.json")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.destinations = data.destinations;
    //     });
    // } catch (e) {
    //   console.error(e);
    // }
    try {
      axios
        .get("https://run.mocky.io/v3/50056046-26bf-4cf7-b3a2-fe0d58a8d2b8")
        .then((resp) => {
          const response = resp.data.destinations;
          console.log(resp);
          this.destinations = response;
        });
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
