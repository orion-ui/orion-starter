<template>
	<o-card :title="post.title">
		{{ post.body }}
	</o-card>
</template>

<script setup lang="ts">
import PostCardSetupService from '@/setup/post/PostCardSetupService';
const props = defineProps(PostCardSetupService.props);
const setup = new PostCardSetupService(props);
</script>

<style scoped lang="less">

</style>
