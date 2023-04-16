<template>
	<o-section title="Switch theme">
		<div class="theme-modal-selector">
			<o-radio
				v-model="setup.theme"
				label="light"
				input-value="light"/>
			<o-radio
				v-model="setup.theme"
				label="dark"
				input-value="dark"/>
			<o-radio
				v-model="setup.theme"
				label="auto"
				input-value="auto"/>
		</div>
	</o-section>
</template>

<script setup lang="ts">
import ThemeModalSetupService from '@/setup/ThemeModalSetupService';
const props = defineProps(ThemeModalSetupService.props);
const setup = new ThemeModalSetupService(props);
</script>

<style lang="less" scoped>
.theme-modal-selector {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);

  :deep(.orion-radio) {
    margin: 0;

    label {
      text-transform: uppercase;
      margin-left: 0.25rem;
      font-weight: 600;
    }
  }
}
</style>
