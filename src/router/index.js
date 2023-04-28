import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import AskGroup from '../views/AskGroup.vue'
import TestStart from '../views/TestStart.vue'
import DeleteWorker from '../views/DeleteWorker.vue'
import GroupEditor from '../views/GroupEditor.vue'
import Groupinfo from '../views/GroupInfo.vue'




const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/AskGroup',
    name: 'AskGroup',
    component: AskGroup
  },
  {
    path: '/TestStart',
    name: 'TestStart',
    component: TestStart
  },
  {
    path: '/DeleteWorker',
    name: 'DeleteWorker',
    component: DeleteWorker
  },
  {
    path: '/GroupEditor',
    name: 'GroupEditor',
    component: GroupEditor
  },
  {
    path: '/Groupinfo',
    name: 'Groupinfo',
    component: Groupinfo
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
