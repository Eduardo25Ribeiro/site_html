<script setup>
import iphoneImage from '../../imagem/iphone-17-pro-max.png';
</script>

<template>
  <main id="coluna">
    <div class="container-padrao">
      <h1>Bem-vindo ao Cell Phone</h1>
      <p>
        Sua fonte principal para comparar os lançamentos de 2025. Explore as
        especificações e descubra qual o melhor smartphone para você.
      </p>
      <img
        id="iphone-diferentinho"
        :src="iphoneImage"
        alt="iPhone 17 Pro Max"
      />
    </div>
  </main>
</template>
