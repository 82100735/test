import Vue from 'vue'
import Router from 'vue-router'



const login = r => require.ensure([], () => r(require('../views/login.vue')), 'group-login')
const register = r => require.ensure([], () => r(require('../views/register.vue')), 'group-register')
const system = r => require.ensure([], () => r(require('../views/system.vue')), 'group-system')
const platform = r => require.ensure([], () => r(require('../views/platform.vue')), 'group-platform')
const merchants = r => require.ensure([], () => r(require('../views/merchants.vue')), 'group-merchants')
const member = r => require.ensure([], () => r(require('../views/member.vue')), 'group-member')
const application = r => require.ensure([], () => r(require('../views/application.vue')), 'group-application')
const terminal = r => require.ensure([], () => r(require('../views/terminal.vue')), 'group-terminal')
const data = r => require.ensure([], () => r(require('../views/data.vue')), 'group-data')

Vue.use(Router)
let router = new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/system',
			name: 'system',
			component: system
		},
		{
			path: '/platform',
			name: 'platform',
			component: platform
		},
		{
			path: '/merchants',
			name: 'merchants',
			component: merchants
		},
		{
			path: '/member',
			name: 'member',
			component: member
		},
		{
			path: '/application',
			name: 'application',
			component: application
		},
		{
			path: '/terminal',
			name: 'terminal',
			component: terminal
		},
		{
			path: '/data',
			name: 'data',
			component: data
		}
	],
	mode:'history',
	history:true
})

export default router
