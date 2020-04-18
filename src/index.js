import * as jsonData from '../csvjson.json'
import { mainElements } from '../src/nodes/getElements'

//load dom before script
window.addEventListener("DOMContentLoaded", () => {

    const data = jsonData;
    console.log(mainElements);
    //dice functsions
    const dice = () => { 
        

    }
    //dice event
    console.log(mainElements.d100)
    mainElements.d100[0].addEventListener('click',dice);

  });