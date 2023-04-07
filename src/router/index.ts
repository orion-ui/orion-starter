import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/layout',
			name: 'layout',
			component: () => import('@/views/LayoutView.vue'),
			redirect: { name: 'simple-list' },
			children: [
				{
					path: 'simple-list',
					name: 'simple-list',
					component: () => import('@/views/SimpleListView.vue'),
				},
			],
		},
	],
});

export default router;
