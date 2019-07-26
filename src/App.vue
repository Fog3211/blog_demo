<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">整体情况</router-link> |
      <router-link to="/education">学历情况</router-link> |
      <router-link to="/age">年龄分布</router-link> |
      <router-link to="/job">职务情况</router-link> |
      <router-link to="/sex">性别分布</router-link> |
      <router-link to="/completion ">完成率排行榜</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    padding: 5px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
