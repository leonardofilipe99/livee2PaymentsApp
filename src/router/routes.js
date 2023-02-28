
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/signup', component: () => import('pages/SignUpPage.vue') },
      { path: '/help', component: () => import('src/pages/HelpPage.vue') },
      { path: '/depositar', component: () => import('src/pages/DepositarValor.vue') },
      { path: '/profile', component: () => import('pages/ProfilePage.vue') },
      { path: '/v-meses', component: () => import('pages/VisualizarMeses.vue') },
      { path: '/p-recepcao', component: () => import('pages/ProximaRecepcao.vue') },
      { path: '/painel', component: () => import('pages/Painel.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
