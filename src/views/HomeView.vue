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
    v-model="searchTerm"
  ></Layout>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import Layout from '@/components/Layout.vue';

export default {
  name: 'HomeView',
  components: { Layout },
  data() {
    return {
      searchTerm: '',
      hasSearched: false,
    };
  },
  async created() {
    await this.fetchGlobalNews();
  },
  methods: {
    ...mapActions({
      fetchGlobalNews: 'fetchGlobalNews',
      // fetchAllNews: 'fetchAllNews',
    }),

    getNews() {
      console.log(this.searchTerm);
      this.$router.push({
        name: 'search',
        params: { name: this.searchTerm },
      });
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
    }),
    mainHeadline() {
      return this.globalNews.articles[0];
    },
    otherArticles() {
      return this.globalNews.articles.slice(1, 10);
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
