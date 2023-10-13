import { intersection } from "./scripts/operations/Intersection.js";
import { complement } from "./scripts/operations/complement.js";
import { reverse } from "./scripts/operations/reverse.js";
import { union } from "./scripts/operations/union.js";

const d = document;
const data = {
    buttonAddStateElement: {
        element: {},
        idSelector: ""
    },
    buttonAddAlphabetlement: {
        element: {},
        idSelector: ""
    },
    inputAddStateElement: {
        element: {},
        idSelector: ""
    },
    inputAddAlphabetElement: {
        element: {},
        idSelector: ""
    },
    seletcInitialStateElement: {
        element: {},
        idSelector: "",
        value: ""
    },
    counter: 0,
    automata: {
        states: [],
        alphabet: [],
        initialState: "",
        finalStates: [],
        functions: []
    }
}

d.addEventListener('DOMContentLoaded', () => {
    OnInit();
})

const events = {
    captureStatesInput: () => {

        data.buttonAddStateElement.element.addEventListener('click', (e) => {
            const inputAddStateElement = data.inputAddStateElement.element;
            if (inputAddStateElement.value) {
                if (addState(inputAddStateElement.value)) {
                    data.counter++;
                    const splitElements = data.inputAddStateElement.idSelector.split('-');
                    data.inputAddStateElement.idSelector = splitElements[0] + "-" + data.counter;


                    inputAddStateElement.disabled = true;
                    factory.createInputState();

                    /**Añadir el estado como opción del select de estado inicial */
                    const optionElement = d.createElement("option");
                    optionElement.value = inputAddStateElement.value;
                    optionElement.text = inputAddStateElement.value;
                    data.seletcInitialStateElement.element.appendChild(optionElement);
                }

            }
        })
    },

    captureAlphabetInput: () => {

        data.buttonAddAlphabetlement.element.addEventListener('click', (e) => {
            const inputAddAlphabetElement = data.inputAddAlphabetElement.element;
            if (inputAddAlphabetElement.value) {
                if (addAlphabet(inputAddAlphabetElement.value)) {
                    data.counter++;
                    const splitElements = data.inputAddAlphabetElement.idSelector.split('-');
                    data.inputAddAlphabetElement.idSelector = splitElements[0] + "-" + data.counter;


                    inputAddAlphabetElement.disabled = true;
                    factory.createInputAlphabet();
                    console.log(data.automata)
                }

            }
        })
    },

    captureInitialState: () => {
        const element = data.seletcInitialStateElement.element;
        element.addEventListener('change', (e) => {
            if (element.value == "0") {
                data.automata.initialState = "";
                console.log(data.automata)
                return;
            }
            data.automata.initialState = element.value;
        })
    }
}


const factory = {
    createInputState: () => {
        const input = d.createElement("input")
        input.id = data.inputAddStateElement.idSelector;
        const inputStateButtonStateWraper = d.querySelector(".inputState-buttonState-wraper");
        inputStateButtonStateWraper.appendChild(input);
        data.inputAddStateElement.element = input;
    },
    createInputAlphabet: () => {
        const input = d.createElement("input")
        input.id = data.inputAddAlphabetElement.idSelector;
        const inputAlphabetButtonStateWraper = d.querySelector(".inputAlphabet-buttonAlphabet-wraper");
        inputAlphabetButtonStateWraper.appendChild(input);
        data.inputAddAlphabetElement.element = input;
    }
}

const OnInit = () => {
    uploadInitialData();
    events.captureStatesInput();
    events.captureInitialState();
    events.captureAlphabetInput();
}


const uploadInitialData = () => {
    data.buttonAddStateElement = { element: {}, idSelector: "buttonAddState" };
    data.inputAddStateElement = {
        element: {},
        idSelector: "inputState-0"
    };
    data.seletcInitialStateElement = { element: {}, idSelector: "initialState", value: "" };
    data.buttonAddAlphabetlement = { element: {}, idSelector: "buttonAddAlphabet", value: "" }
    data.inputAddAlphabetElement = {
        element: {},
        idSelector: "inputAlphabet-0"
    };
    data.counter = 0;
    uploadElementsToData();
}


const uploadElementsToData = () => {
    const buttonAddStateElement = d.getElementById(data.buttonAddStateElement.idSelector);
    const seletcInitialStateElement = d.getElementById(data.seletcInitialStateElement.idSelector);
    const buttonAddAlphabetlement = d.getElementById(data.buttonAddAlphabetlement.idSelector);
    const inputAddAlphabetElement = d.getElementById(data.inputAddAlphabetElement.idSelector);
    const inputAddStateElement = d.getElementById(data.inputAddStateElement.idSelector);


    data.buttonAddStateElement.element = buttonAddStateElement;
    data.seletcInitialStateElement.element = seletcInitialStateElement;
    data.buttonAddAlphabetlement.element = buttonAddAlphabetlement;
    data.inputAddAlphabetElement.element = inputAddAlphabetElement;
    data.inputAddStateElement.element = inputAddStateElement;
}

const addState = (newState) => {
    const stateExist = data.automata.states.find((state) => state === newState);
    if (stateExist) {
        console.log("El estado ya existe")
        return false;
    }
    data.automata.states.push(newState);
    return true;
}

const addAlphabet = (newAlphabet) => {
    const alphabetExist = data.automata.alphabet.find((a) => a === newAlphabet);
    if (alphabetExist) {
        console.log("El alfabeto ya existe")
        return false;
    }
    data.automata.alphabet.push(newAlphabet);
    return true;
}

const getStates = () => {
    return data.automata.states;
}