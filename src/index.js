import { intersection } from "./scripts/operations/Intersection.js";
import { complement } from "./scripts/operations/complement.js";
import { reverse } from "./scripts/operations/reverse.js";
import { union } from "./scripts/operations/union.js";
import { addState, getStates } from "./scripts/states.js";

const d = document;

const data = {
    inptuStateSelector: "inputState-0",
    counter: 0,
}

d.addEventListener('DOMContentLoaded', () => {
    const buttonStateSelector = "#buttonState";

    let automataOne = {
        states: ["B", "D", "E", "F", "Z"],
        aphabet: [],
        initialState: "B",
        finalStates: ["B", "D"],
        functions: [
            {
                source: "A",
                target: "B",
                transition: [2, 5]
            },
            {
                source: "B",
                target: "D",
                transition: [1, 4]
            },
        ]

    }
    const comp = complement(automataOne);
    console.log(comp);

    reverse(automataOne);



    automataOne = {
        states: ["A", "B", "D"],
        alphabet: [1, 0],
        initialState: "A",
        finalStates: ["B", "D"],
        functions: [
            {
                source: "A",
                target: "B",
                transition: [1]
            },
            {
                source: "B",
                target: "D",
                transition: [1]
            },
            {
                source: "A",
                target: "A",
                transition: [0]
            },
            {
                source: "D",
                target: "A",
                transition: [0]
            },
            {
                source: "B",
                target: "B",
                transition: [0]
            },
            {
                source: "D",
                target: "D",
                transition: [1]
            },
        ]
    };
    
    let automataTwo = {
        states: ["X", "Y", "Z"],
        alphabet: [0, 1],
        initialState: "X",
        finalStates: ["Z"],
        functions: [
            {
                source: "X",
                target: "Y",
                transition: [0]
            },
            {
                source: "Y",
                target: "Z",
                transition: [1]
            },
            {
                source: "X",
                target: "X",
                transition: [1]
            },
            {
                source: "Y",
                target: "Y",
                transition: [0]
            },
            {
                source: "Z",
                target: "Y",
                transition: [1]
            },
            {
                source: "z",
                target: "z",
                transition: [0]
            },
        ]
    };

    console.log("Intersection: ",intersection(automataOne, automataTwo))
    console.log("Union: ",union(automataOne, automataTwo))
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