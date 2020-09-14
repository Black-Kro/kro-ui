import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router';
import NotFound from './pages/NotFound.vue';


class ScrollQueue {
    private resolve: (() => void) | null = null
    private promise: Promise<any> | null = null
  
    add() {
      this.promise = new Promise(resolve => {
        this.resolve = resolve
      })
    }
  
    flush() {
      this.resolve && this.resolve()
      this.resolve = null
      this.promise = null
    }
  
    async wait() {
      await this.promise
    }
}

const scrollWaiter = new ScrollQueue();


export const createKroPressRouter = (routes: RouteRecordRaw[]) => createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
        {
            path: '/:catchAll(.*)',
            component: NotFound,
            meta: {
                title: '404 Not Found'
            }
        }
    ],
    // @ts-ignore
    async scrollBehavior(to, from, savedPosition) {
        await scrollWaiter.wait()
        if (savedPosition) {
          return savedPosition
        } else {
          // TODO: check if parent in common that works with alias
          if (to.matched.every((record, i) => from.matched[i] !== record))
            return { left: 0, top: 0 }
        }
        // leave scroll as it is by not returning anything
        // https://github.com/Microsoft/TypeScript/issues/18319
        return false
    },
});

