import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/components/home/HomeView.vue'),
		},
		{
			path: '/layout',
			name: 'layout',
			component: () => import('@/components/shared/SharedLayout.vue'),
			redirect: { name: 'simple-list' },
			children: [
				{
					path: 'simple-list',
					name: 'simple-list',
					component: () => import('@/components/SimpleListView.vue'),
				},
			],
		},
	],
});

export default router;
