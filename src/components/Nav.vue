<template>
  <header class="newcity">
      <nav>
          <span>Nouveau lieu</span>
          <div class="navactions">
              <i class="fas fa-edit"></i>
              <i class="fas fa-sync-alt"></i>
              <i class="far fa-plus-square"></i>
          </div>
      </nav>
  </header>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    position: fixed;
    width: 100%;
    max-width: 1024px;
    border: 3px solid red;
    padding: 0 20px;
}
nav {
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    width: 100%;
}
.navactions i:nth-child(2), .navactions i:nth-child(3) {
    margin-left: 20px;
}
.navactions i {
    font-size: 2em;
}
</style>