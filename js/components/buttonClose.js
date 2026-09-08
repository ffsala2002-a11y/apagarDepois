import { searchCamp } from '../variables/variables.js';



export function close() {
    searchCamp.value = "";
    searchCamp.focus()
}