<template>
  <o-card :title="post.title">
    {{ post.body }}
  </o-card>
</template>

<script setup lang="ts">
defineProps<{
  post: JsonPlaceholderPost
}>()
</script>