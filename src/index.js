import { union } from "./scripts/operations/union.js";
import { addState, getStates } from "./scripts/states.js";

const d = document;

const data = {
    inptuStateSelector: "inputState-0",
    counter: 0,
}

d.addEventListener('DOMContentLoaded', () => {
    const buttonStateSelector = "#buttonState";
    
    events.captureInput(buttonStateSelector);
})




const events = {
    captureInput: (buttonSelector) => {
        const buttonStateElement = d.querySelector(buttonSelector);

        buttonStateElement.addEventListener('click', (e) => {
            let inputStateElement = d.querySelector("#" + data.inptuStateSelector);
            if (inputStateElement.value) {
                if (addState(inputStateElement.value)) {
                    data.counter++;
                    const splitElements = data.inptuStateSelector.split('-');
                    data.inptuStateSelector = splitElements[0] + "-" + data.counter;

                    
                    inputStateElement.disabled = true;
                    factory.createInputState();
                    console.log(getStates())
                }

            }
        })
    }
}


const factory = {
    createInputState: () => {
        const input = d.createElement("input")
        input.id = data.inptuStateSelector;
        const inputStateButtonStateWraper = d.querySelector(".inputState-buttonState-wraper");
        inputStateButtonStateWraper.appendChild(input);
    }
}