import Vue from 'vue'
import VueRouter from 'vue-router'
 // import HomeView from '../views/HomeView.vue'

 import PageHome from "@/views/pages/PageHome.vue";
import NoteList from "@/views/notes/NoteList.vue";
import CreateNote from '@/views/notes/CreateNote.vue';
 import EditNote from "@/views/notes/EditNote";
 import ViewNote from "@/views/notes/ViewNote";
 import TestView from "@/views/TestView";
// import IdTestView from "@/views/IdTestView";
import RouterView from "@/views/RouterView";




Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },

    {
        path: "/notes",
        name: "Notes",
        component: NoteList,
    },

    {
        path: "/notes/add",
        name: "CreateNote",
        component: CreateNote,
    },

    {
        path: "/notes/edit/:id",
        name: "EditNote",
        component: EditNote,
    },

    {
        path: "/notes/view/:id",
        name: "ViewNote",
        component: ViewNote,
    },

    {
        path: "/rview",
        name: "RouterView",
        component: RouterView,
    },

    // {
    //     path: "/notes/edit/:id",
    //     name: "EditNote",
    //     component: EditNote,
    // },


    //test routers

    {
        path: "/test",
        name: "Test",
        component: TestView,
    },
    //
    // {
    //     path: "/test/:id",
    //     name: "IdTest",
    //     component: IdTestView,
    // },



  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
