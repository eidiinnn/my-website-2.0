<template>
  <header class="main-header">
    <v-card flat color="background">
      <v-card-item>
        <h1 class="text-h1 text-primary text-uppercase font-weight-black">
          {{ $t("hello") }}
        </h1>
        <h2 class="text-h3 text-uppercase">{{ $t("im") }}</h2>
        <h3 class="text-h6 font-weight-thin text-medium-emphasis">
          Front-end {{ $t("developer") }}
        </h3>
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
  flex-wrap: wrap-reverse;
}

.me-in-pixels {
  width: 25%;
  max-width: 350px;
  height: auto;
  object-fit: contain;
}
</style>
