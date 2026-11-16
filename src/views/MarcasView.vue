<script setup>
import samsungLogo from '../../imagem/Samsung_Orig_Wordmark_BLACK_RGB.png';
import appleLogo from '../../imagem/Apple_logo_black.svg';
</script>

<template>
  <main class="container-padrao">
    <h2>Marcas em Destaque</h2>
    <section class="fora">
      <section class="cards brand-card">
        <img id="sansung-logo" :src="samsungLogo" alt="Samsung" />
        <p>Líder em inovação de telas e câmeras com a linha Galaxy S25.</p>
      </section>
      <div class="divisor"></div>
      <section class="cards brand-card">
        <img id="apple-logo" :src="appleLogo" alt="Apple" />
        <p>Referência em ecossistema e performance com o novo iPhone 17.</p>
      </section>
    </section>
  </main>
</template>
