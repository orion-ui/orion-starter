<template>
	<o-layout
		:nav-main="navMain"
		:nav-top="navTop"
		:nav-tabs="navTabs">
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
import { useModal, useNotif } from '@orion.ui/orion';
import ThemeModal from '@/components/ThemeModal.vue';

let simpleCallbackNotif: Undef<OrionNotif> = undefined;

const navMain: OrionNavMain.Props = {
	items: [
		{
			label: `Home`,
			icon: 'home_outline',
			to: { name: 'home' },
			root: true,
			always: true,
		},
		{
			label: `Simple list`,
			icon: 'data',
			to: { name: 'simple-list' },
		},
		{
			label: `Submenu collapse`,
			icon: 'list_ul',
			children: [
				{
					label: `Item 1`,
					icon: 'heading_h1',
					callback: simpleCallback,
				},
				{
					label: `Item 2`,
					icon: 'heading_h2',
					callback: simpleCallback,
				},
				{
					label: `Item 3`,
					icon: 'heading_h3',
					callback: simpleCallback,
				},
				{
					label: `Item 4`,
					icon: 'heading_h4',
					callback: simpleCallback,
				},
			],
		},
		{
			label: `Submenu replace`,
			icon: 'list_ul',
			replace: true,
			children: [
				{
					label: `Item 1`,
					icon: 'heading_h1',
					callback: simpleCallback,
				},
				{
					label: `Item 2`,
					icon: 'heading_h2',
					callback: simpleCallback,
				},
				{
					label: `Item 3`,
					icon: 'heading_h3',
					callback: simpleCallback,
				},
				{
					label: `Item 4`,
					icon: 'heading_h4',
					callback: simpleCallback,
				},
			],
		},
	],
};

const navTop: OrionNavTop.Props = {
	items: [
		{
			label: `Switch theme`,
			icon: 'sun',
			callback: switchTheme,
		},
		{
			label: `Documentation`,
			icon: 'link_02',
			callback: () => window.open(`https://orion-ui.org`, '_blank'),
		},
		{
			label: `Logout`,
			icon: 'log_out',
			callback: () => useNotif.info(`Example of menu callback`),
		},
	],
};

const navTabs: OrionNavTabs.Props = { items: navMain.items.slice(0, 2) };

function simpleCallback () {
	simpleCallbackNotif
		? simpleCallbackNotif.resetTimer()
		: (simpleCallbackNotif = useNotif.info({
			title: `You clicked on a menu item`,
			events: { 'leave-end': () => (simpleCallbackNotif = undefined) },
		}));
}

function switchTheme () {
	useModal({
		Nested: ThemeModal,
		size: 'xs',
	});
}
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
