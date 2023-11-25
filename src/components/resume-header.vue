<template>
  <header class="main-header gap-large">
    <div class="md-container d-flex align-center justify-space-between">
      <v-card flat color="transparent">
        <v-card-item>
          <h1 class="text-h1 text-primary text-uppercase font-weight-black">
            {{ $t("hello") }}
          </h1>
          <h2 class="text-h3 text-uppercase">{{ $t("im") }}</h2>
          <h3
            class="text-h7 font-weight-thin text-medium-emphasis text-uppercase"
          >
            Front-end {{ $t("developer") }}
          </h3>
        </v-card-item>
      </v-card>
      <img src="/meInPixel.png" class="me-in-pixels" />
    </div>
  </header>
</template>

<script></script>

<style>
.main-header {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
.main-header * {
  z-index: 2;
}
.main-header::after {
  content: "";
  background-image: url("/background-header.jpg");
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.09;
  z-index: 0;
}

.me-in-pixels {
  width: 40%;
  /* max-width: 350px; */
  height: auto;
  object-fit: contain;
}
</style>
