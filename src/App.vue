<template>
  <div id="app">
    <br>
    <h1> BRICS NATION OPEN STREET MAP ANALYSIS</h1>
    <div id="nav">
      <router-link to="/">ALL TOP 5</router-link> |
      <router-link to="/india">India</router-link> |
      <router-link to="/southafrica">South Africa</router-link> |
      <router-link to="/china">China</router-link> |
      <router-link to="/russia">Russia</router-link> |
      <router-link to="/brazil">Brazil</router-link> |
      <router-link to="/test">Sandbox</router-link>   
    </div>
    <router-view/>
    
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
