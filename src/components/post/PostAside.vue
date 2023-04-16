<template>
	<o-section :title="post.title">
		{{ post.body }}
	</o-section>

	<o-section
		v-if="setup.comments.length"
		subtitle="Comments">
		<o-sticker
			v-for="comment in setup.comments"
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
import { inject } from 'vue';
import PostAsideSetupService from '@/setup/post/PostAsideSetupService';
const _aside = inject<OrionAside>('_aside');
const props = defineProps(PostAsideSetupService.props);
const setup = new PostAsideSetupService(props, _aside);
</script>

<style scoped lang="less">

</style>
