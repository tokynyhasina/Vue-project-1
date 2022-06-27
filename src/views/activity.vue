<template>
  <section>
    <div class="activity-container">
      <div class="card-wrapper">
        <div
          class="card"
          v-for="(activity, index) in activitys"
          :key="`i-${index}`"
        >
          <img src="../assets/icon-map.png" alt="icon" class="card-img" />
          <div class="card-body">
            <h2 class="card-title">{{ activity.title }}</h2>
            <p class="card-pg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              tenetur amet id assumenda tempora veniam provident esse natus
              nostrum omnis.
            </p>
          </div>
        </div>
      </div>
      <div class="activity-slide">
        <figure class="img-slide-wrap">
          <img
            src="../assets/baobab.jpg"
            alt="slide-img"
            class="slide-img active"
          />
          <img src="../assets/Maki.jpg" alt="slide-img" class="slide-img" />
          <img src="../assets/bridge.jpg" alt="slide-img" class="slide-img" />
        </figure>
        <div class="card-wrap">
          <div class="info-card">
            <h2 class="black-title">
              Client 's are
              <strong class="blue-title">happy, </strong>
              we are happy
            </h2>
            <div class="star">
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
              <i class="fa-solid fa-star star-list"></i>
            </div>
            <div class="text-info">
              <p class="card-pg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas perspiciatis vero quasi, aut doloremque facilis tenetur
                quae aperiam
              </p>
            </div>
            <div class="card-list">
              <img src="../assets/woman1.jpg" alt="" class="profil" />
              <div class="profil-info">
                <h3 class="sub-info">Muslimah Tanji</h3>
                <p class="card-pg">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <div class="btn-wrap">
              <i
                class="fa-solid fa-arrow-left icon-arrow"
                @click="prevSlide()"
              ></i>
              <i
                class="fa-solid fa-arrow-right icon-arrow"
                @click="nextSlide()"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div class="question-container">
        <div class="question-txt">
          <h2 class="title">Curious About our service?</h2>
          <h2 class="title">Let's talk with our experts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            accusantium doloribus nisi quibusdam optio mollitia minima ipsam
            esse, nostrum, ipsum assumenda, eaque rerum. Doloremque amet dolore
            recusandae velit mollitia!
          </p>
        </div>
        <button class="btn-ask">Ask for a quote</button>
      </div>
    </div>
  </section>
</template>

<script scoped>
export default {
  data() {
    return {
      count: 0,
      activitys: [],
    };
  },
  mounted() {
    try {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
          this.activitys = data.activity;
        });
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    nextSlide() {
      let items = document.querySelectorAll(".slide-img");
      items[this.count].classList.remove("active");

      if (this.count < items.length - 1) {
        this.count++;
      } else {
        this.count == 0;
      }
      items[this.count].classList.add("active");
      console.log(items.length);
    },
    prevSlide() {
      let items = document.querySelectorAll(".slide-img");
      items[this.count].classList.remove("active");
      if (this.count > 0) {
        this.count--;
      } else {
        this.count == items.length - 1;
      }
      items[this.count].classList.add("active");
    },
  },
};
</script>
<style scoped>
.activity-container {
  @apply w-[70%] mx-auto mt-[-130px] py-[115px] bg-white px-[60px];
}
.activity-slide {
  @apply xl:flex items-start justify-between  mx-auto my-[115px];
}
.card-wrapper {
  @apply grid xl:grid-cols-3 gap-[60px]  mx-auto;
}
.card {
  @apply text-center;
}
.card-img {
  @apply w-[200px] mx-auto;
}
.card-title {
  @apply text-[25px] font-black my-6;
}
.img-slide-wrap {
  @apply flex overflow-hidden xl:w-[50%];
}
.slide-img {
  @apply w-full hidden object-cover h-[600px];
}

.slide-img.active {
  @apply block;
}
.card-wrap {
  @apply xl:w-[45%];
}
.star {
  @apply flex items-center mt-[50px];
}
.star-list {
  @apply text-yellow-400 mr-3 text-[20px];
}
.info {
  @apply flex items-center justify-between mt-9;
}
.text-info {
  @apply mt-[30px];
}
.card-list {
  @apply flex items-center my-[50px];
}
.profil-info {
  @apply ml-6;
}
.profil {
  @apply w-[50px] rounded-full object-cover;
}

.icon-arrow {
  @apply text-[30px] border-blue-400 text-blue-600 border-2 py-2 px-4 mr-5 cursor-pointer duration-500 ease-out;
}

.icon-arrow:hover {
  @apply bg-blue-400 text-white;
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
.question-container {
  @apply xl:flex items-center justify-between px-[50px] py-[100px] relative z-50;
  background-image: url("../assets/bg-head.svg");
}
.question-container::after {
  content: "";
  @apply absolute left-0 top-0 w-full bg-blue-400 opacity-70 h-full;
}
.question-txt {
  @apply xl:w-[50%] text-white z-50 relative;
}
.title {
  @apply text-[30px] font-bold;
  font-family: "DM Sans", sans-serif;
}
.btn-ask {
  @apply w-[200px] font-bold bg-white py-[15px] z-50 relative;
}
@media (max-width: 980px) {
  .activity-container {
    @apply w-full px-[20px];
  }
  .card {
    @apply px-[30px];
  }
  .slide-img {
    @apply h-[500px];
  }
  .card-img {
    @apply w-[180px];
  }
  .card-title {
    @apply text-[20px];
  }
  .question-container {
    @apply px-[25px];
  }
  .question-txt p {
    @apply mt-4;
  }
  .btn-ask {
    @apply mt-[30px];
  }
}
</style>
