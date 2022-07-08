<template>
  <div class="search">
    <input
      type="text"
      v-model="searchTerm"
      name="search"
      placeholder="Search..."
    /><button @click="getNews">Search</button>
  </div>
  <div class="home">
    <div class="headpic">
      <img :src="mainHeadline.urlToImage" />
    </div>
    <div class="main">
      <div class="headline">
        <h3>{{ mainHeadline.title }}</h3>
      </div>
      <div class="date">
        <p>January 3, 2022 &nbsp;</p>
        <span>&#x2022; 4 mins read</span>
      </div>
      <div class="author">
        <p>{{ mainHeadline.author }}</p>
      </div>
    </div>
    <div class="articles">
      <h4>ARTICLES</h4>
      <div class="articles-info">
        <div class="article" v-for="article in otherArticles">
          <div class="article-img">
            <img :src="article.urlToImage" />
          </div>
          <div class="article-text">
            <h5>
              <a :href="article.url" target="_blank">{{ article.title }}</a>
            </h5>
          </div>
          <div class="article-date">
            <p>January 3, 2022 &nbsp;</p>
            <span>&#x2022; 4 mins read</span>
          </div>
          <div class="article-author">
            <p>{{ article.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchView',
  components: {},
  data() {
    return {
      searchTerm: this.$route.params.name,
      //   hasSearched: false,
    };
  },
  async created() {
    await this.fetchGlobalNews();
    await this.fetchAllNews(this.searchTerm);
  },
  methods: {
    ...mapActions({
      fetchGlobalNews: 'fetchGlobalNews',
      fetchAllNews: 'fetchAllNews',
    }),

    async getNews() {
      await this.fetchAllNews(this.searchTerm);

      //   this.hasSearched = true;
      this.searchTerm = '';
    },
    // getDate(rawDate) {
    //   let date = new Date(rawDate);
    //   let datestr = date.toString();
    //   datestr.slice(4, 16);
    // },
  },
  computed: {
    ...mapGetters({
      globalNews: 'getGlobalNews',
      allNews: 'getAllNews',
    }),
    mainHeadline() {
      return this.allNews.articles[0];
    },
    otherArticles() {
      return this.allNews.articles.slice(1, 10);
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 500px;
  background-color: #6b0b5b;
}

.search {
  display: flex;
  margin-top: 60px;
  margin-left: 60px;
  gap: 5px;
}
h5,
a {
  text-decoration: none;
  color: black;
}
.search input {
  height: 25px;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
}

::-webkit-input-placeholder {
  padding-left: 10px;
  color: black;
}

.search button {
  width: 60px;
  color: #ffffff;
  background-color: #6b0b5b;
  border-radius: 8px;
}
.headpic {
  position: absolute;
  top: 260px;
  left: 400px;
  width: 1100px;
  height: 450px;
  border-radius: 8px;
}

.headpic img {
  /* width: 100%; */
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.date span,
.date p {
  color: white;
  font-weight: 400;
  font-size: 14px;
}

.author p {
  font-weight: 600;
  font-size: 14px;
}
.main h3,
.date p,
.author p {
  color: white;
  padding-left: 400px;
}

h3 {
  font-weight: 700;
  font-size: 32px;
  padding-top: 150px;
  letter-spacing: -0.02em;
}
.date {
  display: flex;
  padding-top: 16px;
}

.author {
  padding-top: 36px;
  padding-bottom: 52px;
}

.articles {
  margin-top: 96px;
  margin-left: 400px;
  margin-right: 400px;
}

.articles-info {
  margin-top: 32px;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 35px;
}

.article-date {
  display: flex;
}
.article-text,
.article-date {
  margin-top: 16px;
}

.article-date p,
.article-date span {
  color: black;
  font-weight: 400;
  font-size: 14px;
}

.articles h4 {
  font-weight: 400;
  font-size: 10px;
}

.article-img {
  width: 264px;
  height: 168px;
  border-radius: 10px;
}

.article-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.article-text {
  width: 260px;
}

h5 {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.02em;
}

.article-author p {
  font-weight: 600;
  font-size: 14px;
  margin-top: 11px;
  letter-spacing: -0.02em;
  color: black;
}

.articles {
  padding-bottom: 250px;
}

h5 {
  cursor: pointer;
}
</style>
