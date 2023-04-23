<template>
	<o-layout
		:nav-main="setup.navMain"
		:nav-top="setup.navTop"
		:nav-tabs="setup.navTabs">
		<template #nav-top-left>
			<div class="branding">
				<img
					alt="Orion logo"
					class="branding__logo"
					src="@/assets/orion-logo-brand.svg">
				Your Project
			</div>
		</template>

		<router-view/>
	</o-layout>
</template>

<script setup lang="ts">
import SharedLayoutSetupService from '@/setup/shared/SharedLayoutSetupService';
const props = defineProps(SharedLayoutSetupService.props);
const setup = new SharedLayoutSetupService(props);
</script>

<style lang="less" scoped>
.branding {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__logo {
    display: block;
    height: 2.5rem;
  }
}
</style>
