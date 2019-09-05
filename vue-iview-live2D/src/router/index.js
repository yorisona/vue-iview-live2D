import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/leftNav.vue'
import Index from '../components/index.vue'
import Login from '../components/login.vue'
import Tab from '../components/tab.vue'
import Table from '../components/table.vue'
import Table2 from '../components/table-slot.vue'
Vue.use(Router)

const router = new Router({
	// mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
	routes: [
		{
			path: '/login',
			name: 'Login',
			component: Login,
		},
		{
			path: '/index',
			name: 'Index',
			component: Index,
			children: [
				{
					path: '/leftNav',
					component: Test
				},
				{
					path: '/tab',
					name: 'Tab',
					component: Tab
				},
				{
					path: '/table',
					name: 'Table',
					component: Table
				},
				{
					path: '/table-slot',
					name: 'Table2',
					component: Table2
				}
			]
		},
	]
})

router.beforeEach((to, from, next) => {
	// console.log(to);
	if (to.path.indexOf('login') < 0 && !window.sessionStorage.getItem('access_token')) {
		router.replace('login');
		next();
	}
	next();
})
export default router
