<template>
  <div class="d-flex gap flex-column">
    <div class="floating-menu">
      <top-menu />
    </div>
    <resume-header />
  </div>
</template>

<style scoped>
.floating-menu {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 200;
}
</style>
