<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Giscus />
    </template>
  </Layout>
</template>