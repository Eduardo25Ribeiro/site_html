<script setup>
import { onMounted, ref } from 'vue';
import settingsIcon from '../../imagem/18432.png';

const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  document.body.classList.toggle('modo-escuro', isDark.value);
  localStorage.setItem('cell-phone-theme', isDark.value ? 'dark' : 'light');
}

onMounted(() => {
  isDark.value = localStorage.getItem('cell-phone-theme') === 'dark';
  document.body.classList.toggle('modo-escuro', isDark.value);
});
</script>

<template>
  <header>
    <nav aria-label="Navegação principal">
      <ul>
        <li><RouterLink to="/inicio">INÍCIO</RouterLink></li>
        <li class="nav-links">
          <RouterLink to="/comparativo">COMPARATIVO</RouterLink>
          <RouterLink to="/marcas">MARCAS</RouterLink>
          <RouterLink to="/opinioes">OPINIÕES</RouterLink>
          <span id="config">
            <button type="button" aria-label="Abrir configurações">
              <img :src="settingsIcon" alt="" />
            </button>
            <ul>
              <li>
                <button id="tema" type="button" @click="toggleTheme">
                  Tema - {{ isDark ? 'claro' : 'escuro' }}
                </button>
              </li>
              <li><RouterLink to="/login">Login</RouterLink></li>
            </ul>
          </span>
        </li>
      </ul>
    </nav>
  </header>
</template>
