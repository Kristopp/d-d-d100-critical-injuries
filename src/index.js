import * as jsonData from '../csvjson.json'
import {
  mainElements
} from '../src/nodes/getElements'
import css from './styles/styles.css'

//load dom before script
window.addEventListener("DOMContentLoaded", () => {

  const data = jsonData;
  let dataString = JSON.stringify(data)
  let dataCut = dataString.replace(/ *\([^)]*\) */g, "");
  let dataFinal = JSON.parse(dataCut)
  let windowRes = window.matchMedia("(min-width: 1400px)")

  let dice = () => {

    let valueArray = []
    let mainCont = mainElements.mainCont[0];
    const life = mainElements.lifeText[0];
    const death = mainElements.deathText[0];

    //create dice svg

    //clear all 
    for (let i = 0; i < 7; i++) {
      mainElements.lifeList[i].innerHTML = `* * * * * *`
      mainElements.deathList[i].innerHTML = `* * * * * *`
    }
    let lifeCheckWindow = () => {
      if (windowRes.matches) {
        mainCont.style.gridTemplateAreas = '"life life . death death" "life life . death death" "life life dice death death" "life life . death death"'
        death.style.display = "block"
        life.style.display = "block"
      } else {
        mainCont.style.gridTemplateAreas = '". life ."". life ." ". life ." ". dice ."';
        death.style.display = "none"
        life.style.display = "block"
      }
    }
    let deathCheckWindow = () => {
      if (windowRes.matches) {
        mainCont.style.gridTemplateAreas = '"life life . death death" "life life . death death" "life life dice death death" "life life . death death"'
      } else {
        death.style.display = "block"
        life.style.display = "none"
        mainCont.style.gridTemplateAreas = '". death ."". death ." ". death ." ". dice ."';
        console.log("else")
      }
    }
    //chek for device reso and adjust
    //Get random object
    let randomObject = dataFinal.default[Math.floor(Math.random() * dataFinal.default.length)];
    //add text into elements
    for (let [key, value] of Object.entries(randomObject)) {
      //Store key value pairs inside array
      valueArray.push((`${key}: ${value}`));
      if (randomObject.d100 > 50) {
        //toggle good/bad container and positsion to right place
  
        lifeCheckWindow();
        //generate dynamic values for all text nodes 
        for (let i = 0; i < 7; i++) {
          mainElements.lifeList[i].innerHTML = `${valueArray[i]}`
        }
      } else {
        deathCheckWindow();
        //generate dynamic values for all text nodes 
        for (let i = 0; i < 7; i++) {
          mainElements.deathList[i].innerHTML = `${valueArray[i]}`
        }
      }
    }
    windowRes.addListener(lifeCheckWindow)
  }
  mainElements.d100[0].addEventListener('click', dice);
});