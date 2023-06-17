import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import Category from '../views/Category.vue';
import ItemCard from '../views/ItemCard.vue';

const routes = [
	{
		path: '/',
		name: 'MainPage',
		component: MainPage,
	},
	{
		path: '/category/:id',
		name: 'Category',
		component: Category
	},
	{
		path: '/category/:id/:itemId',
		name: 'ItemCard',
		component: ItemCard
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
