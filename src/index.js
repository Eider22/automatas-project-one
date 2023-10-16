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
        idSelector: "",
        value: ""
    },
    inputAddAlphabetElement: {
        element: {},
        idSelector: "",
        value: ""
    },
    buttonAddFinalStatesElement: {
        element: {},
        idSelector: "",
        value: ""
    },
    plusWrapper: {
        element: {},
        idSelector: "",
        value: ""
    },
    seletcInitialStateElement: {
        element: {},
        idSelector: "",
        value: ""
    },
    selectFinalStatesElement: {
        element: {},
        idSelector: "",
        value: ""
    },
    tableInputsBody: {
        element: {},
        idSelector: "",
        value: ""
    },


    inputStateButtonStateWraperElement: {
        element: {},
        idSelector: "",
        value: ""
    },

    inputAlphabetButtonAlphabetWraper: {
        element: {},
        idSelector: "",
        value: ""
    },

    selectFinalStatesButtonFinalStatesWraper: {
        element: {},
        idSelector: "",
        value: ""
    },

    initialStateWrapper: {
        element: {},
        idSelector: "",
        value: ""
    },

    counter: 0,
    currentAutomata: {
        id: null,
        states: [],
        alphabet: [],
        initialState: "",
        finalStates: [],
        functions: []
    },
    automatas: [],
    idcounter: 0,
}

d.addEventListener('DOMContentLoaded', () => {
    OnInit();
})

const OnInit = () => {
    uploadInitialData();
    runEvents();
}

const runEvents = () => {
    events.captureStates();
    events.captureInitialState();
    events.captureAlphabet();
    events.captureFinalState();
    events.addAutomata();
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
    },
    createSelectFinalState: () => {
        const select = d.createElement("select")
        select.id = data.selectFinalStatesElement.idSelector;

        const availableStates = data.currentAutomata.states.filter(state => !data.currentAutomata.finalStates.includes(state))

        if (availableStates.length > 0) {
            availableStates.forEach(state => {
                let option = d.createElement("option");
                option.value = state;
                option.text = state;
                select.appendChild(option);
            });
        }



        const selectAlphabetButtonStateWraper = d.querySelector(".selectFinalStates-buttonFinalStates-wraper");


        selectAlphabetButtonStateWraper.appendChild(select);
        data.selectFinalStatesElement.element = select;
    }
}




const uploadInitialData = () => {

    data.currentAutomata = {
        id: data.idcounter,
        states: [],
        alphabet: [],
        initialState: "",
        finalStates: [],
        functions: []
    };

    data.inputAddStateElement.element.value = "";
    data.inputAddAlphabetElement.element.value = "";
    data.seletcInitialStateElement.element.value = "0"

    data.counter = 0;



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

    data.buttonAddFinalStatesElement = { element: {}, idSelector: "buttonAddFinalStates", value: "" }
    data.selectFinalStatesElement = { element: {}, idSelector: "selectFinalStates-0", value: "" }

    data.inputStateButtonStateWraperElement = { element: {}, idSelector: "inputStateButtonStateWraper", value: "" }
    data.inputAlphabetButtonAlphabetWraper = { element: {}, idSelector: "inputAlphabetButtonAlphabetWraper", value: "" }
    data.selectFinalStatesButtonFinalStatesWraper = { element: {}, idSelector: "selectFinalStatesButtonFinalStatesWraper", value: "" }
    data.initialStateWrapper = { element: {}, idSelector: "initialStateWrapper", value: "" }

    data.plusWrapper = { element: {}, idSelector: "plusWrapper", value: "" }
    data.counter = 0;
    uploadElementsToData();
}

const uploadElementsToData = () => {
    const buttonAddStateElement = d.getElementById(data.buttonAddStateElement.idSelector);
    const seletcInitialStateElement = d.getElementById(data.seletcInitialStateElement.idSelector);
    const buttonAddAlphabetlement = d.getElementById(data.buttonAddAlphabetlement.idSelector);
    const inputAddAlphabetElement = d.getElementById(data.inputAddAlphabetElement.idSelector);
    const inputAddStateElement = d.getElementById(data.inputAddStateElement.idSelector);
    const buttonAddFinalStatesElement = d.getElementById(data.buttonAddFinalStatesElement.idSelector);
    const selectFinalStatesElement = d.getElementById(data.selectFinalStatesElement.idSelector);
    const plusWrapper = d.getElementById(data.plusWrapper.idSelector);
    const inputStateButtonStateWraperElement = d.getElementById(data.inputStateButtonStateWraperElement.idSelector);
    const inputAlphabetButtonAlphabetWraper = d.getElementById(data.inputAlphabetButtonAlphabetWraper.idSelector);
    const selectFinalStatesButtonFinalStatesWraper = d.getElementById(data.selectFinalStatesButtonFinalStatesWraper.idSelector);
    const initialStateWrapper = d.getElementById(data.initialStateWrapper.idSelector);


    data.buttonAddStateElement.element = buttonAddStateElement;
    data.seletcInitialStateElement.element = seletcInitialStateElement;
    data.buttonAddAlphabetlement.element = buttonAddAlphabetlement;
    data.inputAddAlphabetElement.element = inputAddAlphabetElement;
    data.inputAddStateElement.element = inputAddStateElement;
    data.buttonAddFinalStatesElement.element = buttonAddFinalStatesElement;
    data.selectFinalStatesElement.element = selectFinalStatesElement;
    data.plusWrapper.element = plusWrapper;
    data.inputStateButtonStateWraperElement.element = inputStateButtonStateWraperElement;
    data.inputAlphabetButtonAlphabetWraper.element = inputAlphabetButtonAlphabetWraper;
    data.selectFinalStatesButtonFinalStatesWraper.element = selectFinalStatesButtonFinalStatesWraper;
    data.initialStateWrapper.element = initialStateWrapper;
}

const events = {
    captureStates: () => {

        data.buttonAddStateElement.element.addEventListener('click', (e) => {
            console.log("CLICK")
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

                    updateFinalStates(inputAddStateElement.value);




                    /**
                     * Si el botón para agregar nuevos estados finales esta inactivo
                     * Se activa y se crea un select cargando el nuevo estado agregado
                     */
                    if (data.buttonAddFinalStatesElement.element.disabled) {
                        data.buttonAddFinalStatesElement.element.disabled = false;
                        factory.createSelectFinalState();
                    }
                }

            }
        })
    },

    captureAlphabet: () => {

        data.buttonAddAlphabetlement.element.addEventListener('click', (e) => {
            const inputAddAlphabetElement = data.inputAddAlphabetElement.element;
            if (inputAddAlphabetElement.value) {
                if (addAlphabet(inputAddAlphabetElement.value)) {
                    data.counter++;
                    const splitElements = data.inputAddAlphabetElement.idSelector.split('-');
                    data.inputAddAlphabetElement.idSelector = splitElements[0] + "-" + data.counter;


                    inputAddAlphabetElement.disabled = true;
                    factory.createInputAlphabet();
                    console.log(data.currentAutomata)
                }

            }
        })
    },

    captureFinalState: () => {

        data.buttonAddFinalStatesElement.element.addEventListener('click', (e) => {
            const selectFinalStatesElement = data.selectFinalStatesElement.element;
            if (selectFinalStatesElement.value == 0) {
                console.log("Elija un estado");
                return;
            }

            if (addFinalState(selectFinalStatesElement.value)) {
                data.counter++;
                const splitElements = data.selectFinalStatesElement.idSelector.split('-');
                data.selectFinalStatesElement.idSelector = splitElements[0] + "-" + data.counter;


                selectFinalStatesElement.disabled = true;
                if (data.currentAutomata.finalStates.length >= data.currentAutomata.states.length) {
                    data.buttonAddFinalStatesElement.element.disabled = true;
                    return;
                }
                factory.createSelectFinalState();
            }

            console.log(data.currentAutomata)
        })
    },

    captureInitialState: () => {
        const element = data.seletcInitialStateElement.element;
        element.addEventListener('change', (e) => {
            if (element.value == "0") {
                data.currentAutomata.initialState = "";
                console.log(data.currentAutomata)
                return;
            }
            data.currentAutomata.initialState = element.value;
        })
    },
    addAutomata: () => {
        data.plusWrapper.element.addEventListener('click', (e) => {
            console.log("ADD")
            e.stopPropagation();
            if (data.currentAutomata.states.length == 0) {
                console.log("Debes agregar por lo menos un estado")
                return;
            }

            if (data.currentAutomata.initialState.length == 0) {
                console.log("Debes agregar un estado inicial")
                return;
            }

            if (data.currentAutomata.initialState.length > 1) {
                console.log("Debes agregar solo un estado inicial")
                return;
            }

            if (data.currentAutomata.finalStates.length == 0) {
                console.log("Debes agregar por lo menos un estado final")
                return;
            }

            if (data.currentAutomata.alphabet.length == 0) {
                console.log("Debes agregar por lo menos un elemento al alfabeto")
                return;
            }

            data.automatas.push(data.currentAutomata);


            data.idcounter++;
            addAutomataTotable();

            console.log("data.automatas ", data.automatas)
        })
    }
}

const updateFinalStates = (newState) => {
    const selectFinalStatesElement = data.selectFinalStatesElement.element;

    const option = d.createElement("option");
    option.value = newState;
    option.text = newState;
    data.selectFinalStatesElement.element.appendChild(option);

}

const addState = (newState) => {
    const stateExist = data.currentAutomata.states.find((state) => state === newState);
    if (stateExist) {
        console.log("El estado ya existe")
        return false;
    }
    data.currentAutomata.states.push(newState);
    return true;
}

const addAlphabet = (newAlphabet) => {
    const alphabetExist = data.currentAutomata.alphabet.find((a) => a === newAlphabet);
    if (alphabetExist) {
        console.log("El alfabeto ya existe")
        return false;
    }
    data.currentAutomata.alphabet.push(newAlphabet);
    return true;
}

const addFinalState = (newState) => {
    const stateExist = data.currentAutomata.finalStates.find((a) => a === newState);
    if (stateExist) {
        console.log("El estado final ya existe")
        return false;
    }
    data.currentAutomata.finalStates.push(newState);
    return true;
}

const getStates = () => {
    return data.currentAutomata.states;
}

const addAutomataTotable = () => {
    /**
            * Poner automata en la tabla de inputs
           */
    const tableBody = d.getElementById("tableInputsBody");
    let row = d.createElement("tr");
    /**Estados */
    let statesConcat = "";
    data.currentAutomata.states.forEach(state => {
        statesConcat = statesConcat.concat(state, ",")
    })
    let tdState = d.createElement("td");
    statesConcat = statesConcat.substring(0, statesConcat.length - 1);
    tdState.textContent = statesConcat;
    row.appendChild(tdState);


    /**Alfabeto */
    let alphabetConcat = "";
    data.currentAutomata.alphabet.forEach(alphabet => {
        alphabetConcat = alphabetConcat.concat(alphabet, ",")
    })
    let tdAlphabet = d.createElement("td");
    alphabetConcat = alphabetConcat.substring(0, alphabetConcat.length - 1);
    tdAlphabet.textContent = alphabetConcat;
    row.appendChild(tdAlphabet);

    /**Funciones de transición */
    let tdITransitionFunctions = d.createElement("td");
    row.appendChild(tdITransitionFunctions);



    /**Estado inicial */
    let tdInitialState = d.createElement("td");
    tdInitialState.textContent = data.currentAutomata.initialState;
    row.appendChild(tdInitialState);
    /**Estado final */
    let finalStateConcat = "";
    data.currentAutomata.finalStates.forEach(finalState => {
        finalStateConcat = finalStateConcat.concat(finalState, ",")
    })
    let tdFinalState = d.createElement("td");
    finalStateConcat = finalStateConcat.substring(0, finalStateConcat.length - 1);
    tdFinalState.textContent = finalStateConcat;
    row.appendChild(tdFinalState);


    tableBody.appendChild(row);



    render.renderStates();
    render.renderPlus();
    render.renderAlphabet();
    render.renderFinalState();
    render.renderInitialState();
    clearData();
    runEvents();
}


const clearData = () => {
    uploadInitialData();
}


const render = {
    renderPlus: () => {
        // plusContainer
        const plusContainer = d.getElementById("plusContainer");
        while (plusContainer.firstChild) {
            plusContainer.removeChild(plusContainer.firstChild);
        }

        const plusWraper = d.createElement("div");
        plusWraper.className = "addAutomata";
        plusWraper.id = "plusWrapper";
        const span = d.createElement("span");
        span.className = "plus";
        span.textContent = "+";

        plusWraper.appendChild(span);
        plusContainer.appendChild(plusWraper);
    },

    renderStates: () => {
        // all states
        while (data.inputStateButtonStateWraperElement.element.firstChild) {
            data.inputStateButtonStateWraperElement.element.removeChild(data.inputStateButtonStateWraperElement.element.firstChild);
        }

        const buttonAddState = d.createElement("button")
        buttonAddState.id = "buttonAddState";
        buttonAddState.type = "text";
        buttonAddState.textContent = "Agregar";

        const inputAddState = d.createElement("input")
        inputAddState.id = "inputState-0";
        inputAddState.type = "text";

        data.inputStateButtonStateWraperElement.element.appendChild(buttonAddState)
        data.inputStateButtonStateWraperElement.element.appendChild(inputAddState)
    },
    renderAlphabet: () => {
        // Alphabet
        while (data.inputAlphabetButtonAlphabetWraper.element.firstChild) {
            data.inputAlphabetButtonAlphabetWraper.element.removeChild(data.inputAlphabetButtonAlphabetWraper.element.firstChild);
        }

        // <button id="buttonAddAlphabet">Agregar</button>
        //             <input type="text" id="inputAlphabet-0"></input>

        const buttonAddAlphabet = d.createElement("button")
        buttonAddAlphabet.id = "buttonAddAlphabet";
        buttonAddAlphabet.textContent = "Agregar";

        const inputAddAlphabet = d.createElement("input")
        inputAddAlphabet.id = "inputAlphabet-0";
        inputAddAlphabet.type = "text";

        data.inputAlphabetButtonAlphabetWraper.element.appendChild(buttonAddAlphabet)
        data.inputAlphabetButtonAlphabetWraper.element.appendChild(inputAddAlphabet)
    },
    renderFinalState: () => {
        // FinalState
        while (data.selectFinalStatesButtonFinalStatesWraper.element.firstChild) {
            data.selectFinalStatesButtonFinalStatesWraper.element.removeChild(data.selectFinalStatesButtonFinalStatesWraper.element.firstChild);
        }

        // <button id="buttonAddFinalStates">Agregar</button>
        //             <select name="finalStates" id="selectFinalStates-0">
        //                 <option value="0" selected>---Seleccione un estado---</option>
        //             </select>

        const buttonAddFinalStates = d.createElement("button")
        buttonAddFinalStates.id = "buttonAddFinalStates";
        buttonAddFinalStates.textContent = "Agregar";

        const selectAddFinalStates = d.createElement("select");
        selectAddFinalStates.name = "finalStates";
        selectAddFinalStates.id = "selectFinalStates-0";

        const optiontAddFinalStates = d.createElement("option");
        optiontAddFinalStates.value = "0";
        optiontAddFinalStates.selected = true;
        optiontAddFinalStates.textContent = "---Seleccione un estado---";

        selectAddFinalStates.appendChild(optiontAddFinalStates);

        data.selectFinalStatesButtonFinalStatesWraper.element.appendChild(buttonAddFinalStates)
        data.selectFinalStatesButtonFinalStatesWraper.element.appendChild(selectAddFinalStates);

    },

    renderInitialState: () => {
        // InitianState
        while (data.initialStateWrapper.element.firstChild) {
            data.initialStateWrapper.element.removeChild(data.initialStateWrapper.element.firstChild);
        }

       
        //             <select name="initialState" id="initialState">
        //                 <option value="0" selected>---Seleccione un estado---</option>
        //             </select>

        const selectInitialState = d.createElement("select");
        selectInitialState.name = "initialState";
        selectInitialState.id = "initialState";

        const optiontAddInitialState = d.createElement("option");
        optiontAddInitialState.value = "0";
        optiontAddInitialState.selected = true;
        optiontAddInitialState.textContent = "---Seleccione un estado---";

        selectInitialState.appendChild(optiontAddInitialState);

        data.initialStateWrapper.element.appendChild(selectInitialState)
    }
}