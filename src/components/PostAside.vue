<template>
	<o-section :title="post.title">
		{{ post.body }}
	</o-section>

	<o-section
		v-if="state.comments.length"
		subtitle="Comments">
		<o-sticker
			v-for="comment in state.comments"
			:key="comment.id"
			:title="comment.name">
			<div class="flex fd-c g-xs">
				<span class="text--info">{{ comment.email }}</span>
				<div>{{ comment.body }}</div>
			</div>
		</o-sticker>
	</o-section>
</template>

<script setup lang="ts">
import { inject, onBeforeMount, reactive } from 'vue';
import { sleep } from '@orion.ui/orion';

const _aside = inject<OrionAside>('_aside');

const props = defineProps<{
  post: JsonPlaceholderPost;
}>();

const state = reactive({ comments: [] as JsonPlaceholderComment[] });

onBeforeMount(async () => {
	_aside?._loader()?.show(`Fetching comments...`);

	await sleep(700); // simulate longer request
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${props.post.id}/comments`,
	);
	state.comments = await res.json();

	_aside?._loader()?.hide();
});
</script>
