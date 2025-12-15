import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Campaign = () => import('../pages/Campaign.vue')
const Request = () => import('../pages/Request.vue')
const Contact = () => import('../pages/Contact.vue')
const Author = () => import('../pages/Author.vue')


const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Beranda' } },
  { path: '/tentang-kami', name: 'About', component: About, meta: { title: 'Tentang Kami' } },
  { path: '/kampanye-donor', name: 'Campaign', component: Campaign, meta: { title: 'Kampanye Donor' } },
  { path: '/permintaan-darah', name: 'Request', component: Request, meta: { title: 'Permintaan Darah' } },
  { path: '/kontak', name: 'Contact', component: Contact, meta: { title: 'Kontak & Bantuan' } },
  { path: '/tentang-pembuat', name: 'Author', component: () => import('../pages/Author.vue'), meta: { title: 'Tentang Pembuat' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
