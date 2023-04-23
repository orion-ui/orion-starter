<template>
	<o-page
		title="Simple list"
		subtitle="Fetched from {JSON}Placeholder">
		<template #actions>
			<o-icon
				icon="search"
				@click="triggerSearchPromptAsync()"/>
		</template>

		<o-list
			v-model:page="state.page"
			use-auto-pagination
			:list="list"
			:total="list.length">
			<template #default="{ item }">
				<post-card
					:post="item"
					@click="openPostAsync(item)"/>
			</template>
		</o-list>
	</o-page>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, reactive } from 'vue';
import { upperFirst } from 'lodash-es';
import { sleep, useAside, useLoader, usePrompt } from '@orion.ui/orion';
import PostCard from '@/components/PostCard.vue';
import PostAside from '@/components/PostAside.vue';

const state = reactive({
	search: undefined as Undef<string>,
	fulllist: [] as JsonPlaceholderPost[],
	page: {
		index: 1,
		size: 12,
	} as OrionList.Props['page'],
});

const list = computed(() => {
	return state.fulllist
		.filter(x => !state.search || x.title.includes(state.search))
		.map(x => ({
			...x,
			title: upperFirst(x.title),
			body: upperFirst(x.body),
		}));
});

async function openPostAsync (post: JsonPlaceholderPost) {
	useAside({
		Nested: PostAside,
		NestedProps: { post },
	});
}

async function triggerSearchPromptAsync () {
	const { confirm, value } = await usePrompt<string>({
		title: `Search`,
		message: `Filter on post's title`,
	});

	confirm && value?.trim().length
		? (state.search = value)
		: (state.search = undefined);

	state.page.index = 1;
}

onBeforeMount(async () => {
	useLoader().show(`Fetching data...`);

	await sleep(700); // simulate longer request
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	state.fulllist = await res.json();

	useLoader().hide();
});
</script>
