import { addState, getStates } from "./scripts/states.js";

const d = document;

d.addEventListener('DOMContentLoaded', () => {

    const buttonStateSelector = "#buttonState";
    const inptuStateSelector = "#inputState";

    console.log("hello")
    events.captureInput(buttonStateSelector, inptuStateSelector);    
    // addState
})




const events = {
    captureInput: (buttonSelector, inputSelector) => {
        const buttonStateElement = d.querySelector(buttonSelector);
        const inputStateElement = d.querySelector(inputSelector);

        buttonStateElement.addEventListener('click', (e) => {
            addState(inputStateElement.value);
            console.log(getStates())
        })
    }
}