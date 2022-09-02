import Vue from 'vue'
import Router from 'vue-router'
import ProjectManage from '@/components/ProjectManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectManage',
      component: ProjectManage
    }
  ]
})
