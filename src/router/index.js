import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue';
import Problems from "@/view/Problems";
import ProblemDetail from "@/view/ProblemDetail";

Vue.use(VueRouter)

const routes = [
    {
        'path': '/',
        'name': 'Home',
        'component': Home,
        'children': [
            {
                'path': '/problem/:id',
                'name': 'Problem',
                'component': ProblemDetail
            },
            {
                'path': '/problems',
                'name': 'Problems',
                'component': Problems,
            },
            {
                'path': '/hello',
                 'name': 'Hello',
                'component': ProblemDetail
            }

        ]
    }

    ]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router