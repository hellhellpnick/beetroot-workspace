<template>
  <div id="app" class="app">
    <nav class="app__nav">
      <ul class="app__list">
        <li>
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/posts">Posts</router-link>
        </li>
        <li>
          <router-link class="link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view class="app__view" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app__view {
  padding: 40px;
}
.app__nav {
  padding: 24px;
  background-color: gray;
}
.app__list {
  list-style: none;
  display: flex;
  align-items: center;
}
.link {
  color: white;
  font-weight: 600;
  text-decoration: none;
  margin-right: 24px;
}
</style>
