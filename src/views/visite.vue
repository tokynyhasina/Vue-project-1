<template>
  <section>
    <div class="info-container">
      <div class="card-location">
        <figure class="img-wrap">
          <img src="../assets/Rectangle 8.svg" alt="lieu" class="img active" />
          <img src="../assets/img1.svg" alt="lieu" class="img" />
          <img src="../assets/img2.svg" alt="lieu" class="img" />
        </figure>

        <div class="location-choos">
          <p class="location active">{{ ville }}</p>
          <div class="icon-btn">
            <i
              class="fa-solid fa-arrow-left-long icon-slide"
              @click="prevSlider()"
            ></i>
            <i
              class="fa-solid fa-arrow-right-long icon-slide"
              @click="nextSlider()"
            ></i>
          </div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="info-card">
          <div class="star">
            <i class="fa-solid fa-star star-list"></i>
            <i class="fa-solid fa-star star-list"></i>
            <i class="fa-solid fa-star star-list"></i>
            <i class="fa-solid fa-star star-list"></i>
            <i class="fa-solid fa-star star-list"></i>
          </div>
          <h2 class="black-title">
            Make a great Friday at
            <strong class="blue-title">{{ ville }}</strong>
          </h2>
          <div class="info">
            <p class="days">3 Day(1 night)</p>
            <p class="people">2103 people visited</p>
          </div>
          <div class="card-list">
            <i class="fa-solid fa-circle-check icon-check"></i>
            <div class="text-info">
              <h3 class="sub-info">
                Arrival and Departure transfert from/to airport hotel
              </h3>
              <p class="card-pg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas perspiciatis vero quasi, aut doloremque facilis tenetur
                quae aperiam voluptates commodi molestiae ipsum iste deleniti
                architecto!
              </p>
            </div>
          </div>
          <div class="card-list">
            <i class="fa-solid fa-circle-check icon-check"></i>
            <div class="text-info">
              <h3 class="sub-info">
                Arrival and Departure transfert from/to airport hotel
              </h3>
              <p class="card-pg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas perspiciatis vero quasi, aut doloremque facilis tenetur
                quae aperiam voluptates commodi molestiae ipsum iste deleniti
                architecto!
              </p>
            </div>
          </div>
          <div class="price-wrap">
            <p class="price">${{ price }}.00</p>
            <button class="btn-blue">Book now</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.info-container {
  @apply xl:flex items-center justify-between md:w-[70%] mx-auto mt-[140px];
}
.card-location {
  @apply relative  xl:w-[45%];
}
.img-wrap {
  @apply w-full overflow-hidden flex;
}
.active {
  @apply block;
}
.img {
  @apply w-full hidden object-cover h-[640px];
}
.img.active {
  @apply block;
}

.location-choos {
  @apply flex items-center justify-between w-[300px] bg-white drop-shadow-2xl absolute right-[-60px] top-[80%] py-3 px-2 rounded;
}
.location {
  @apply font-bold hidden;
}
.location.active {
  @apply block;
}
.card-wrap {
  @apply xl:w-[45%];
}
.star {
  @apply flex items-center;
}
.star-list {
  @apply text-yellow-400 mr-3 text-[20px];
}
.info {
  @apply flex items-center justify-between mt-9;
}
.days {
  @apply text-[18px];
}
.days {
  @apply font-black text-black;
}
.card-list {
  @apply flex items-start mt-9;
}

.icon-check {
  @apply text-blue-400 text-[25px] mr-4;
}
.sub-info {
  @apply font-black text-[18px];
}
.price-wrap {
  @apply flex items-center justify-between mt-10;
}
.price {
  @apply text-[40px] font-extrabold;
}

/* Responsive OF this page */

@media (max-width: 980px) {
  .info-container {
    @apply flex-col w-full px-[20px];
  }
  .card-location {
    @apply w-full;
  }
  .img {
    @apply h-[500px];
  }
  .location-choos {
    @apply right-1/2 translate-x-1/2;
  }
  .card-wrap {
    @apply w-full;
  }
  .star-list {
    @apply text-[18px];
  }
  .sub-info {
    @apply text-[14px];
  }
  .days {
    @apply text-[15px];
  }
  .people {
    @apply text-[15px];
  }
  .price {
    @apply text-[30px];
  }
} ;
</style>
<script>
export default {
  data() {
    return {
      count: 0,
      locations: [
        { name: "Mahajanga", price: 250 },
        { name: "Tuléar", price: 300 },
        { name: "Morondava", price: 200 },
      ],
      ville: "Mahajanga",
      price: 250.0,
    };
  },
  methods: {
    nextSlider() {
      let items = document.querySelectorAll(".img");
      items[this.count].classList.remove("active");

      if (this.count < items.length - 1) {
        this.count++;
      } else {
        this.count == 0;
      }
      items[this.count].classList.add("active");
      this.ville = this.locations[this.count].name;
      this.price = this.locations[this.count].price;
    },
    prevSlider() {
      let items = document.querySelectorAll(".img");
      items[this.count].classList.remove("active");

      if (this.count > 0) {
        this.count--;
      } else {
        this.count == items.length - 1;
      }
      items[this.count].classList.add("active");
      this.ville = this.locations[this.count].name;
      this.price = this.locations[this.count].price;
    },
  },
};
this;
</script>
