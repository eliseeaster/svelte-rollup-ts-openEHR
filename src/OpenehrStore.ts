import {writable} from "svelte/store";
import {ready} from 'openehr-client'

export const openEHR = writable(null);

ready().then(client => {
    console.log("hei")
    console.log(client);
    openEHR.set(client);
  //  console.log(openEHR)
});