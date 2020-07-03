import { Plugin } from 'vue';
import { Router } from 'vue-router';
import { useDebounceFn } from '@vueuse/core';

export const ActiveHeaderLinks : Plugin = {
    install(app, { router }: { router: Router }) {
        
        const setActive = useDebounceFn(() => {
            const anchors: HTMLAnchorElement[] = Array.from(document.querySelectorAll('.kro-press-article-heading a'));
            const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

            let isFirstAnchor = false;
            let activeHash = anchors[0];

            for (let i = 0; i < anchors.length; i++) {
                const anchor = anchors[i];

                if (i === 0 && scrollTop === 0) {
                    activeHash = anchor;
                    isFirstAnchor = i === 0;
                    // @ts-ignore
                } else if (anchor.parentElement?.getBoundingClientRect().top - 94  < 0) {
                    activeHash = anchor;
                    isFirstAnchor = i === 0;
                }
            }

            if (isFirstAnchor)
                router.replace({ hash: '' });
            else
                router.replace({ hash: decodeURIComponent(activeHash.hash) });
        }, 100);

        window.addEventListener('scroll', setActive);

    }
};