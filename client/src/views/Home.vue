<template>
  <div class="home">
    <hr>
    <div class="carr">
    <carousel>
      <carousel-slide
        v-for="slide in slides"
        :key="slide"
        class="carousel-slider">
        <img :src="slide" :alt="slide" />
      </carousel-slide>
    </carousel>
    </div>

    <div class="container p-4">
      <div class="row">
        <div
          class="col-md-4"
          v-for="article in displayedArticles"
          :key="article._id"
        >
          <div class="card mb-2 box-shadow post-cards">
            <img v-bind:src="article.imageURL" class="card-img-top" />
            <div class="card-body">
              <h5 class="capitalize">{{ article.title }}</h5>
              <p class="card-text">
                {{ article.description.slice(0, 120) }}...
              </p>
              <h5 class="capitalize">$ {{ article.price }}</h5>
              <button class="btn btn-sm btn-outline-secondary">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--     Loop through the pages array to display each page number       -->
      <div class="btn-group col-md-2 offset-md-5">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          v-if="page != 1"
          @click="page--"
        >
          atras
        </button>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          v-for="pageNumber in pages.slice(page - 1, page + 5)"
          @click="page = pageNumber"
          :key="pageNumber"
        >
          {{ pageNumber }}
        </button>
        <button
          type="button"
          @click="page++"
          v-if="page < pages.length"
          class="btn btn-sm btn-outline-secondary"
        >
          >>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
import CarouselSlide from '../components/CarouselSlide';
export default {
  data() {
    return {
      articles: [],
      baseURL: "http://localhost:3000",
      page: 1,
      perPage: 9,
      pages: [],
                  slides: [
                'https://static.wixstatic.com/media/867e04_a142b600482d467eb45228735e4c6613~mv2_d_3794_2529_s_4_2.jpg/v1/fill/w_1349,h_650,al_c,q_85,usm_0.66_1.00_0.01/867e04_a142b600482d467eb45228735e4c6613~mv2_d_3794_2529_s_4_2.webp',
                'https://images.unsplash.com/photo-1478100180068-2cb01cd9eca7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvdG9zfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1546272505-c455824b6e20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Zm90b3MlMjBjb3ZpfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1531514910867-8d1ca7505f55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2VjaW9uJTIwZGUlMjBmb3Rvc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1484040621146-0489fea31af2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2VjaW9uJTIwZGUlMjBmb3Rvc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1494249589005-fe056518b0ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c2VjaW9uJTIwZGUlMjBmb3Rvc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
            ],
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const res = await this.axios.get(`${this.baseURL}/articles`);
      this.articles = res.data.articles;
    },
    setArticles() {
      let numberOfPages = Math.ceil(this.articles.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate(articles) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return articles.slice(from, to);
    },
  },
  watch: {
    articles() {
      this.setArticles();
    },
  },
  computed: {
    displayedArticles: function () {
      return this.paginate(this.articles);
    },
  },
  
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    },
};

</script>

<style>

    .carr{
    height: 80vh;
    width:100%;
    margin:0;
    padding:0;
    background-position:50% 50%;
    background-size:cover;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:100%;
        height:500px;
        z-index:10;
    }
    .btnn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btnn:hover {
        cursor: pointer;
    }
    .btnn:focus{
        outline:none;
    }
    .btnn-next {
        top:50%;
        right:0;
    }
    .btnn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

</style>
