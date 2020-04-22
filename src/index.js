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
    //clear all 

    console.log(mainElements.deathList)
     for (let i=0;i < mainElements.lifeList.length;i++) { 
       let index =  mainElements.lifeList[0]
       index.innerHTML = ''
    }

    //Store key value pairs inside array
    let valueArray = []
    //Get random object
    let randomObject = dataFinal.default[Math.floor(Math.random() * dataFinal.default.length)];
    for (let [key, value] of Object.entries(randomObject)) {
      //add text into elements
      valueArray.push((`${key}: ${value}`));
      /*   mainElements.lifeList[0].innerHTML = `${valueArray[0]}`;
        mainElements.lifeList[1].innerHTML = `${valueArray[1]}`;
        mainElements.lifeList[2].innerHTML = `${valueArray[2]}`;
        mainElements.lifeList[3].innerHTML = `${valueArray[3]}`;
        mainElements.lifeList[4].innerHTML = `${valueArray[4]}`;
        mainElements.lifeList[5].innerHTML = `${valueArray[5]}`;
        mainElements.lifeList[6].innerHTML = `${valueArray[6]}`; */
      if (randomObject.d100 > 50) {
        mainElements.deathList[0].innerHTML = `${valueArray[0]}`
        mainElements.deathList[1].innerHTML = `${valueArray[1]}`
        mainElements.deathList[2].innerHTML = `${valueArray[2]}`
        mainElements.deathList[3].innerHTML = `${valueArray[3]}`
        mainElements.deathList[4].innerHTML = `${valueArray[4]}`
        mainElements.deathList[5].innerHTML = `${valueArray[5]}`
        mainElements.deathList[6].innerHTML = `${valueArray[6]}`
      } else {
        mainElements.lifeList[0].innerHTML = `${valueArray[0]}`;
        mainElements.lifeList[1].innerHTML = `${valueArray[1]}`;
        mainElements.lifeList[2].innerHTML = `${valueArray[2]}`;
        mainElements.lifeList[3].innerHTML = `${valueArray[3]}`;
        mainElements.lifeList[4].innerHTML = `${valueArray[4]}`;
        mainElements.lifeList[5].innerHTML = `${valueArray[5]}`;
        mainElements.lifeList[6].innerHTML = `${valueArray[6]}`;
      }
    }
    //create rows
  }
  //dice event
  mainElements.d100[0].addEventListener('click', dice);
});