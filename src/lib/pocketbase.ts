import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

export const pb = new PocketBase('https://pawit-prod-pawitsa-y4sfjt.mo6.mogenius.io:80'); // remote
// const pb = new PocketBase('http://127.0.0.1:8090'); // local

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log('authStore changed', auth);
    currentUser.set(pb.authStore.model);
});
