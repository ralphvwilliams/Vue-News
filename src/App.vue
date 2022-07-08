<template>
  <nav>
    <div class="left-nav">
      <img src="../src/assets/leftnavlogo.png" />
    </div>
    <div class="mid-nav">
      <ul>
        <li @click="homePush">Global</li>
        <li @click="techPush">Technology</li>
        <li @click="bizPush">Business</li>
        <li @click="healthPush">Health</li>
      </ul>
    </div>
    <div class="right-nav">
      <p class="menu">Menu</p>
      <img src="@/assets/Hamburger.png" />
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    homePush() {
      this.$router.push('/');
    },
    techPush() {
      this.$router.push('/technology');
    },
    bizPush() {
      this.$router.push('/business');
    },
    healthPush() {
      this.$router.push('/health');
    },
  },
};
</script>
<style>
#app {
  font-family: 'Public Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 24px;
}

.mid-nav ul {
  display: flex;
  align-items: center;
  gap: 30px;
  list-style: none;
}

.right-nav {
  display: flex;
  gap: 30px;
}

.mid-nav li {
  cursor: pointer;
}
</style>
