<template>
  <section>
    <div class="head-wrapper">
      <div class="head-container">
        <div class="head-content">
          <h1 class="head-title">We Have the Best Destinations</h1>
          <p class="head-pg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos iusto voluptatum
            neque nisi dolorum reprehenderit tempore repellendus autem saepe voluptas?
            Dolore, magni repellendus?
          </p>
        </div>
        <div class="icon-play-wrap">
          <i class="fa-solid fa-circle-play icon-play"></i>
        </div>
      </div>
      <div class="inset" @click="hiddenField()"></div>
      <div class="field-wrap">
        <div class="cross" @click="hiddenField()">
          <i class="fa-solid fa-xmark icon-cross"></i>
        </div>

        <div class="field-container">
          <p class="field-list">destination</p>
          <div class="field-content">
            <i class="fa-solid fa-paper-plane icon"></i>
            <!-- <p class="field-txt">Al katanba, Oman</p> -->
            <input type="text" placeholder="your destination" />
          </div>
        </div>
        <div class="field-container">
          <p class="field-list">Date</p>
          <div class="field-content">
            <i class="fa-regular fa-calendar icon"></i>
            <!-- <p class="field-txt">09 june 2022</p> -->
            <input type="date" :value="date" />
            <!-- <p>{{ currentDate() }}</p> -->
          </div>
        </div>
        <div class="field-container">
          <p class="field-list">Activity</p>
          <div class="field-content">
            <i class="fa-solid fa-paper-plane icon"></i>
            <!-- <p class="field-txt">Explore City</p> -->
            <input type="text" placeholder="Choose activity" />
          </div>
        </div>
        <div class="field-container">
          <p class="field-list">People</p>
          <div class="field-content">
            <i class="fa-solid fa-user-check icon"></i>
            <!-- <p class="field-txt">13</p> -->
            <input type="number" placeholder="people number" />
          </div>
        </div>
        <div class="btn-wrap">
          <button class="btn">Search For trip</button>
        </div>
      </div>

      <div class="nav-head-wrap">
        <ul class="nav-head">
          <li class="profil-link">
            <i class="fa-solid fa-arrow-right-long icon-white"></i>
            <a href="#"> Sajek velly </a>
          </li>
          <li class="profil-link">
            <i class="fa-solid fa-arrow-right-long icon-white"></i
            ><a href="#">Nilachol</a>
          </li>
          <li class="profil-link">
            <i class="fa-solid fa-arrow-right-long icon-white"></i><a href="#">Kantab</a>
          </li>
          <li class="profil-link">
            <i class="fa-solid fa-arrow-right-long icon-white"></i><a href="#">Khasab</a>
          </li>
        </ul>
      </div>
      <div class="btn-blue-wrap">
        <button class="btn-blue" @click="visibleField()">See More</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    visibleField() {
      let field = document.querySelector(".field-wrap");
      let inset = document.querySelector(".inset");
      field.classList.add("visibl");
      inset.classList.add("inset-v");
    },
    hiddenField() {
      let field = document.querySelector(".field-wrap");
      let inset = document.querySelector(".inset");
      field.classList.remove("visibl");
      inset.classList.remove("inset-v");
    },
  },

  mounted() {
    const dateNow = new Date();
    const years = dateNow.getFullYear();
    const days = dateNow.getDay();
    const month = Number(dateNow.getMonth());

    this.date = years + " / " + days + " / " + month;
    // return this.date;
  },
};
</script>

<style scoped>
.head-wrapper {
  background-image: url("../assets/bg-head.svg");
  @apply w-full h-screen bg-cover md:p-[170px] pb-14 relative;
}

.head-container {
  @apply flex items-center justify-between;
}
.head-content {
  @apply w-[55%];
}
.head-title {
  @apply text-white text-[85px] font-bold leading-[100px];
}
.head-pg {
  @apply text-white text-[17px] my-12;
}
.icon-play {
  @apply text-[100px] text-white relative z-50;
}
.icon-play-wrap {
  @apply relative z-50;
}
.icon-play-wrap::before {
  content: "";
  @apply w-[115%] h-[115%]  bg-blue-400  absolute left-[-8px] top-[-8px] rounded-full;
}
.icon-play-wrap::after {
  content: "";
  @apply w-[140%] h-[140%]  bg-blue-400 opacity-50 absolute left-[-20px] top-[-20px] rounded-full;
}

.field-wrap {
  @apply bg-white py-9  flex items-center justify-around w-full mx-auto rounded;
}
.cross {
  @apply flex justify-end px-5 invisible;
}
.icon-cross {
  @apply text-[40px] text-right text-blue-400;
}
.field-list {
  @apply text-gray-500 text-[15px];
}
.field-content {
  @apply flex items-center;
}
.icon {
  @apply text-blue-400 text-[18px] mr-[15px];
}
.field-txt {
  @apply text-[16px] font-bold;
}
.btn-wrap {
  @apply w-[170px];
}
.btn {
  @apply w-full py-[14px] px-5 bg-blue-400 text-white rounded;
}
input {
  @apply outline-blue-400 font-bold text-[15px] px-3 py-2;
}
.nav-head {
  @apply flex items-center mt-[120px];
}
.icon-white {
  @apply text-gray-400 mr-3 opacity-0 ease-in duration-300;
}
.icon-white.active {
  @apply visible;
}
.profil-link {
  @apply text-gray-400 flex mr-14 font-extrabold items-center;
}
.profil-link:hover {
  @apply text-white ease-in duration-300;
}
.profil-link:hover .icon-white {
  @apply text-white opacity-100;
}
.btn-blue-wrap {
  @apply w-[200px] mx-auto mt-[50px] relative z-20 hidden;
}
.btn-blue {
  @apply w-full;
}

/* The responsive of this container */

@media (max-width: 980px) {
  .head-wrapper {
    @apply px-[20px] py-[170px] relative;
  }
  .head-container {
    @apply flex-col;
  }
  .head-content {
    @apply w-full;
  }
  .head-pg {
    @apply hidden;
  }
  .icon-play-wrap {
    @apply mt-[30px] z-40;
  }
  .icon-play {
    @apply text-[70px];
  }
  .icon-play-wrap::before {
    @apply top-[-6px] left-[-6px];
  }
  .icon-play-wrap::after {
    @apply top-[-15px] left-[-15px];
  }
  .head-title {
    @apply text-[60px] mb-5 text-center;
  }
  .inset {
    @apply fixed left-0 top-0 w-screen h-screen bg-black opacity-50 hidden z-[50];
  }
  .inset.inset-v {
    @apply block;
  }
  .field-wrap {
    @apply flex-col w-[90%]  absolute left-0 right-0 hidden top-[20%] z-[60] pt-[5px];
  }
  .cross {
    @apply visible cursor-pointer;
  }
  .field-wrap.visibl {
    @apply block duration-700;
  }
  .field-container {
    @apply my-6 w-[90%] mx-auto;
  }
  input {
    @apply w-[90%];
  }
  .btn-wrap {
    @apply mx-auto;
  }
  .btn {
    @apply mt-7;
  }
  .nav-head-wrap {
    @apply absolute left-0 right-0 bottom-[50px] w-full;
  }
  .profil-link {
    @apply text-[15px];
  }
  .nav-head {
    @apply flex-col items-start;
  }
  .profil-link {
    @apply mt-3;
  }
  .btn-blue-wrap {
    @apply block;
  }
}
@media (max-width: 1631px) and (max-height: 980px) {
  .head-wrapper {
    @apply px-[20px];
  }
  .head-container {
    @apply px-[20px];
  }
  .head-title {
    @apply text-[60px];
  }

  .field-wrap {
    @apply px-4;
  }
  .nav-head {
    @apply mt-[50px];
  }
}
</style>
