import { loaderWrapper, fundoLoad } from '../variables/variables.js';

let timeId;
let tempo = 3000;


export function load() {
    loaderWrapper.classList.add("active");
    fundoLoad.classList.add("active");

    clearTimeout(timeId);

    timeId = setTimeout(() => {
        loaderWrapper.classList.remove("active");
        fundoLoad.classList.remove("active");
    }, tempo)
}