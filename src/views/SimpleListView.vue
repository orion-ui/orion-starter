<template>
  <o-page title="Simple list" subtitle="Fetched from {JSON}Placeholder">
    <template #actions>
      <o-icon icon="search" ripple="info" @click="triggerSearchPromptAsync()"></o-icon>
    </template>

    <o-list :list="list" :total="filteredList.length" v-model:page="state.page">
      <template #default="{ item }">
        <post-card :post="item" @click="openPostAsync(item)"/>
      </template>
    </o-list>
  </o-page>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, reactive } from 'vue';
import { upperFirst } from "lodash-es";
import { sleep, useAside, useLoader, usePrompt } from '@orion.ui/orion';
import PostCard from '@/components/PostCard.vue';
import PostAside from '@/components/PostAside.vue';

const state = reactive({
  search: undefined as Undef<string>,
  fulllist: [] as JsonPlaceholderPost[],
  page: {
    index: 1,
    size: 12,
  } as OrionList.Props['page']
})

const filteredList = computed(() => {
  return state.fulllist.filter(x => !state.search || x.title.includes(state.search))
})

const list = computed(() => {
  return filteredList.value
  .slice(
    (state.page.index - 1) * state.page.size, 
    state.page.index * state.page.size
  )
  .map(x => ({ 
    ...x, 
    title: upperFirst(x.title),
    body: upperFirst(x.body),
  }))
})

async function openPostAsync (post: JsonPlaceholderPost) {
  useAside({
    Nested: PostAside,
    NestedProps: { post }
  })
}

async function triggerSearchPromptAsync () {
  const {confirm, value } = await usePrompt<string>({
    title: `Search`,
    message: `Filter on post's title`
  })

  confirm && value?.trim().length
    ? state.search = value
    : state.search = undefined

  state.page.index = 1
}

onBeforeMount(async () => {
  useLoader().show(`Fetching data...`);

  await sleep(700); // simulate longer request
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  state.fulllist = await res.json();
  
  useLoader().hide();
})
</script>