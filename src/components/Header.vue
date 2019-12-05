<template>
     <header class="header-block">
      <div class="header-boxes">
        <div class="header-box1"></div>
        <div class="header-box1">
          <a href="/">
            <img src="../../public/gopher-image.png" width="70px" height="50px">
          </a>
        </div>
        <div class="header-box2">
          <router-link to="/about" class="cv">About/CV</router-link>
        </div>
      </div>
    </header>
</template>

<style scoped>
.header-block {
  display: block;
}
.header-boxes {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.header-box1 {
  flex: 1;
  text-align: center;
}
.header-box2 {
  flex: 1;
  text-align: right;
}
.cv {
  text-decoration: none;
  font-size: 15px;
  color:black;
}
</style>
