import * as jsonData from '../csvjson.json'
import {
  mainElements
} from '../src/nodes/getElements'

//load dom before script
window.addEventListener("DOMContentLoaded", () => {
  const data = jsonData;
  let dataString = JSON.stringify(data)
  let dataCut = dataString.replace(/ *\([^)]*\) */g, "");
  let dataFinal = JSON.parse(dataCut)

  //dice functsions
  const dice = () => {

    let valueArray = []
    //clear all 
    for (let i = 0; i < 7; i++) {
      mainElements.lifeList[i].innerHTML = `* * * * * *`
      mainElements.deathList[i].innerHTML = `* * * * * *`
    }
    //Get random object
    let randomObject = dataFinal.default[Math.floor(Math.random() * dataFinal.default.length)];
    //add text into elements
    for (let [key, value] of Object.entries(randomObject)) {
      //Store key value pairs inside array
      valueArray.push((`${key}: ${value}`));

      if (randomObject.d100 > 50) {
        for (let i = 0; i < 7; i++) {
          mainElements.deathList[i].innerHTML = `${valueArray[i]}`
        }
      } else {
        for (let i = 0; i < 7; i++) {
          mainElements.lifeList[i].innerHTML = `${valueArray[i]}`
        }
      }
    }
  }
  //dice event
  mainElements.d100[0].addEventListener('click', dice);
});