<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Переменные для хранения сообщений
const messageFromSymfony = ref('Загрузка...')
const messageFromGo = ref('Загрузка...')
const messageFromSymfonyRoadRunner = ref('Загрузка...')

const loadMessage = async () => {
  try {
    const [symfonyResponse, goResponse, symfonyRoadRunnerResponse] = await Promise.all([
      axios.get('http://localhost:9000/api/hello/world')
          .then(response => response.data.message)
          .catch(() => 'Ошибка при загрузке данных Symfony'),
      axios.get('http://localhost:5000/api/hello-world')
          .then(response => response.data.message)
          .catch(() => 'Ошибка при загрузке данных Go'),
      axios.get('http://localhost:9001/api/hello/world/rr')
          .then(response => response.data.message)
          .catch(() => 'Ошибка при загрузке данных Symfony RoadRunner')
    ]);

    messageFromSymfony.value = symfonyResponse;
    messageFromGo.value = goResponse;
    messageFromSymfonyRoadRunner.value = symfonyRoadRunnerResponse;
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

onMounted(loadMessage)
</script>

<template>
  <div>
    <h1>Ответ Symfony: {{ messageFromSymfony }}</h1>
    <h1>Ответ Go: {{ messageFromGo }}</h1>
    <h1>Ответ Symfony на RoadRunner: {{ messageFromSymfonyRoadRunner }}</h1>
    <p>Этот компонент загружает строку "Привет, мир!" из 3 API.</p>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
}
</style>