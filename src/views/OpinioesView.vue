<script setup>
const reviews = [
  {
    name: 'João Silva',
    comment: '"O S25 Ultra é incrível, a bateria dura o dia todo!"',
  },
  {
    name: 'Maria Souza',
    comment: '"A câmera do iPhone 17 Pro Max não tem comparação em vídeos."',
  },
  {
    name: 'João Silva',
    comment: '"O S25 Ultra é incrível, a bateria dura o dia todo!"',
  },
  {
    name: 'Maria Souza',
    comment: '"A câmera do iPhone 17 Pro Max não tem comparação em vídeos."',
  },
  {
    name: 'João Silva',
    comment: '"O S25 Ultra é incrível, a bateria dura o dia todo!"',
  },
  {
    name: 'Maria Souza',
    comment: '"A câmera do iPhone 17 Pro Max não tem comparação em vídeos."',
  },
];
</script>

<template>
  <main>
    <div class="container-padrao">
      <h2>O que dizem os usuários</h2>
      <section id="comentarios">
        <div v-for="(review, index) in reviews" :key="index">
          <strong>{{ review.name }}:</strong>
          <p>{{ review.comment }}</p>
        </div>
      </section>
      <section id="tabela">
        <table>
          <tbody>
            <tr>
              <th scope="row">S25 Ultra</th>
              <td>100% das avaliações são positivas</td>
            </tr>
            <tr>
              <th scope="row">iPhone 17 Pro Max</th>
              <td>100% das avaliações são positivas</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </main>
</template>
