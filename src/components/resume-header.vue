<template>
  <header class="main-header">
    <v-card flat color="background">
      <v-card-item>
        <h1 class="text-h3 text-primary text-uppercase font-weight-black">
          Eduardo da Silva
        </h1>
        <h2 class="text-h5 text-uppercase">
          {{ $t("developer") }}
        </h2>
      </v-card-item>
    </v-card>
    <img src="/meInPixel.png" class="me-in-pixels" />
  </header>
</template>

<script></script>

<style scoped>
.main-header {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.me-in-pixels {
  width: 500px;
  height: 400px;
  object-fit: contain;
}
</style>
