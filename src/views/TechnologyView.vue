<template>
  <div class="search">
    <input
      type="text"
      v-model="searchTerm"
      name="search"
      placeholder="Search..."
    /><button @click="getNews">Search</button>
  </div>
  <Layout
    :mainHeadline="mainHeadline"
    :otherArticles="otherArticles"
    :getNews="getNews"
  ></Layout>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import Layout from '@/components/Layout.vue';

export default {
  name: 'TechnologyView',
  components: { Layout },
  data() {
    return {
      searchTerm: '',
      hasSearched: false,
    };
  },
  async created() {
    await this.fetchNews(this.$route.name);
  },
  methods: {
    ...mapActions({
      fetchNews: 'fetchNewsByCategory',
    }),
    getNews() {
      this.$router.push({ name: 'search', params: { name: this.searchTerm } });
    },
  },
  computed: {
    ...mapGetters({
      news: 'getNewsByCategory',
    }),
    mainHeadline() {
      return this.news.articles[0];
    },
    otherArticles() {
      return this.news.articles.slice(1, 10);
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  margin-top: 60px;
  margin-left: 60px;
  gap: 5px;
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
  font-weight: 600;
}
</style>
