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
    buttonAddFunction: {
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
    sourceState: {
        element: {},
        idSelector: "",
        value: ""
    },
    targetState: {
        element: {},
        idSelector: "",
        value: ""
    },
    selectTransition: {
        element: {},
        idSelector: "",
        value: ""
    },
    tableInputsBody: {
        element: {},
        idSelector: "",
        value: ""
    },
    tableOutputContainer: {
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

    functionsContainer: {
        element: {},
        idSelector: "",
        value: ""
    },

    functionSelectedWrapper: {
        element: {},
        idSelector: "",
        value: ""
    },
    unionButton: {
        element: {},
        idSelector: "",
        value: ""
    },
    intersectionButton: {
        element: {},
        idSelector: "",
        value: ""
    },
    complementButton: {
        element: {},
        idSelector: "",
        value: ""
    },
    reverseButton: {
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
    selectedAutomatas: [],
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
    events.addTransition();
    events.unionEvent();
    events.intersectionEvent();
    events.complementEvent();
    events.reverseEvent();
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
    data.sourceState.element.value = "0"
    data.targetState.element.value = "0"
    data.selectTransition.element.value = ""

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
    data.buttonAddFunction = { element: {}, idSelector: "buttonAddFunction", value: "" }

    data.inputStateButtonStateWraperElement = { element: {}, idSelector: "inputStateButtonStateWraper", value: "" }
    data.inputAlphabetButtonAlphabetWraper = { element: {}, idSelector: "inputAlphabetButtonAlphabetWraper", value: "" }
    data.selectFinalStatesButtonFinalStatesWraper = { element: {}, idSelector: "selectFinalStatesButtonFinalStatesWraper", value: "" }
    data.initialStateWrapper = { element: {}, idSelector: "initialStateWrapper", value: "" }
    data.functionsContainer = { element: {}, idSelector: "functionsContainer", value: "" }
    data.functionSelectedWrapper = { element: {}, idSelector: "functionSelectedWrapper", value: "" }
    data.sourceState = { element: {}, idSelector: "sourceState", value: "" }
    data.targetState = { element: {}, idSelector: "targetState", value: "" }
    data.selectTransition = { element: {}, idSelector: "selectTransition", value: "" }
    data.tableOutputContainer = { element: {}, idSelector: "tableOutputContainer", value: "" }
    data.reverseButton = { element: {}, idSelector: "reverse", value: "" }
    data.complementButton = { element: {}, idSelector: "complement", value: "" }
    data.intersectionButton = { element: {}, idSelector: "intersection", value: "" }
    data.unionButton = { element: {}, idSelector: "union", value: "" }

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
    const sourceState = d.getElementById(data.sourceState.idSelector);
    const targetState = d.getElementById(data.targetState.idSelector);
    const selectTransition = d.getElementById(data.selectTransition.idSelector);
    const buttonAddFunction = d.getElementById(data.buttonAddFunction.idSelector);
    const functionSelectedWrapper = d.getElementById(data.functionSelectedWrapper.idSelector);
    const functionsContainer = d.getElementById(data.functionsContainer.idSelector);
    const reverseButton = d.getElementById(data.reverseButton.idSelector);
    const complementButton = d.getElementById(data.complementButton.idSelector);
    const intersectionButton = d.getElementById(data.intersectionButton.idSelector);
    const unionButton = d.getElementById(data.unionButton.idSelector);
    const tableOutputContainer = d.getElementById(data.tableOutputContainer.idSelector);


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
    data.sourceState.element = sourceState;
    data.targetState.element = targetState;
    data.selectTransition.element = selectTransition;
    data.buttonAddFunction.element = buttonAddFunction;
    data.functionSelectedWrapper.element = functionSelectedWrapper;
    data.functionsContainer.element = functionsContainer;
    data.reverseButton.element = reverseButton;
    data.complementButton.element = complementButton;
    data.intersectionButton.element = intersectionButton;
    data.unionButton.element = unionButton;
    data.tableOutputContainer.element = tableOutputContainer;
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
                    updateSourceTransition(inputAddStateElement.value);
                    updateTargetTransition(inputAddStateElement.value);





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


                    updateTransition(inputAddAlphabetElement.value);
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

            if (data.currentAutomata.functions.length == 0) {
                console.log("Debes agregar las transiciones del autómata")
                return;
            }

            data.automatas.push(data.currentAutomata);


            data.idcounter++;
            addAutomataTotable();

            console.log("data.automatas ", data.automatas)
        })
    },

    addTransition: () => {
        const buttonAddFunction = data.buttonAddFunction.element;
        buttonAddFunction.addEventListener("click", (e) => {
            const sourceStateElement = data.sourceState.element;
            const targetStateElement = data.targetState.element;
            const transitionElement = data.selectTransition.element;

            if (sourceStateElement.value == "0" ||
                targetStateElement.value == "0" ||
                transitionElement.value == "") {
                console.log("Debes seleccionar por lo menos una fuente, un destino y una transición ");
                return;
            }


            /**Validar si ya existe esa función en el autómata */
            const functionExist = data.currentAutomata.functions.find((f) => f.source == sourceStateElement.value &&
                f.target == targetStateElement.value);

            if (functionExist) {
                const transitionExist = functionExist.transitions.find(transition => transition == transitionElement.value);
                if (transitionExist) {
                    console.log("La función ya existe")
                    return;
                }
                functionExist.transitions.push(transitionElement.value)
                renderFunction(sourceStateElement.value, transitionElement.value, targetStateElement.value);
                console.log("actual 1 ", data.currentAutomata)
                return;
            }

            const newFunction = {
                source: sourceStateElement.value,
                target: targetStateElement.value,
                transitions: [...transitionElement.value]
            };

            data.currentAutomata.functions.push(newFunction);

            renderFunction(sourceStateElement.value, transitionElement.value, targetStateElement.value);
            console.log("actual 2 ", data.currentAutomata)
        })
    },

    unionEvent: () => {

        data.unionButton.element.addEventListener('click', (e) => {
            if (data.selectedAutomatas.length < 2) {
                console.log("Debes seleccionar dos autómatas")
                return;
            }
            const automataOne = data.selectedAutomatas[0];
            const automataTwo = data.selectedAutomatas[1];
            const unionResult = union(automataOne, automataTwo);
            console.log("automataOne: ", automataOne)
            console.log("automataTwo: ", automataTwo)
            console.log("result: ", unionResult)
            renderOutputAutomata(unionResult);
        })
    },

    intersectionEvent: () => {
        data.intersectionButton.element.addEventListener('click', (e) => {
            if (data.selectedAutomatas.length < 2) {
                console.log("Debes seleccionar dos autómatas")
                return;
            }

            const automataOne = data.selectedAutomatas[0];
            const automataTwo = data.selectedAutomatas[1];
            const intersectionResult = intersection(automataOne, automataTwo);
            console.log("automataOne: ", automataOne)
            console.log("automataTwo: ", automataTwo)
            console.log("result: ", intersectionResult)
            renderOutputAutomata(intersectionResult);
        })
    },

    complementEvent: () => {

        data.complementButton.element.addEventListener('click', (e) => {
            if (data.selectedAutomatas.length != 1) {
                console.log("Debes seleccionar un autómatas")
                return;
            }
            const automata = data.selectedAutomatas[0];
            const complementResult = complement(automata);
            console.log("automata: ", automata)
            console.log("result: ", complementResult)
            renderOutputAutomata(complementResult);
        })
    },
    reverseEvent: () => {

        data.reverseButton.element.addEventListener('click', (e) => {
            if (data.selectedAutomatas.length != 1) {
                console.log("Debes seleccionar un autómatas")
                return;
            }
            const automata = data.selectedAutomatas[0];
            const reverseResult = reverse(automata);
            console.log("automata: ", automata)
            console.log("result: ", reverseResult)
            renderOutputAutomata(reverseResult);
        })
    },

}

const updateFinalStates = (newState) => {
    const selectFinalStatesElement = data.selectFinalStatesElement.element;

    const option = d.createElement("option");
    option.value = newState;
    option.text = newState;
    data.selectFinalStatesElement.element.appendChild(option);

}
const updateSourceTransition = (newState) => {
    const sourceState = data.sourceState.element;

    const option = d.createElement("option");
    option.value = newState;
    option.text = newState;
    data.sourceState.element.appendChild(option);

}

const updateTargetTransition = (newState) => {
    const targetState = data.targetState.element;

    const option = d.createElement("option");
    option.value = newState;
    option.text = newState;
    data.targetState.element.appendChild(option);

}

const updateTransition = (newSTransition) => {
    const selectTransition = data.selectTransition.element;

    const option = d.createElement("option");
    option.value = newSTransition;
    option.text = newSTransition;
    data.selectTransition.element.appendChild(option);

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
    /**Seleccionar */
    let selectTd = d.createElement("td");
    let buttonSelect = d.createElement("button");
    buttonSelect.value = data.currentAutomata.id;
    buttonSelect.textContent = "Seleccionar"

    buttonSelect.addEventListener("click", (e) => {
        // TODO
        let automataId = e.target.value;
        const automata = data.automatas.find(a => a.id == automataId);


        if (data.selectedAutomatas.length == 2) {
            console.log("No puedes seleccionar más autómatas")
            return;
        }

        data.selectedAutomatas.push(automata)
        console.log("data.selectedAutomatas → ", data.selectedAutomatas);
    })
    selectTd.appendChild(buttonSelect);
    row.appendChild(selectTd);

    /**Eliminar */
    let deletTd = d.createElement("td");
    let buttonDelet = d.createElement("button");
    buttonDelet.value = data.currentAutomata.id;
    buttonDelet.textContent = "Eliminar"

    buttonDelet.addEventListener("click", (e) => {
        // TODO
        let automataId = e.target.value;
        if (data.selectedAutomatas.length == 0) {
            console.log("No hay autómatas para eliminar")
            return;
        }

        const automataExist = data.selectedAutomatas.find(a => a.id == automataId);

        if (!automataExist) {
            console.log("No existe el autómata para eliminar")
            return;
        }

        data.selectedAutomatas = data.selectedAutomatas.filter(a => a.id != automataId);


        console.log("data.selectedAutomatas → ", data.selectedAutomatas);
    })

    deletTd.appendChild(buttonDelet);
    row.appendChild(deletTd);


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

    data.currentAutomata.functions.forEach(f => {
        f.transitions.forEach(t => {
            let functionString = factoryRenderFunction(f.source, t, f.target);
            tdITransitionFunctions.textContent += `${functionString};`;
        })
    })

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
    render.renderFunctions();
    clearData();
    events.captureStates();
    events.captureInitialState();
    events.captureAlphabet();
    events.captureFinalState();
    events.addAutomata();
    events.addTransition();
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
    },
    renderFunctions: () => {
        // Functions
        while (data.functionsContainer.element.firstChild) {
            data.functionsContainer.element.removeChild(data.functionsContainer.element.firstChild);
        }

        const template = document.getElementById("template");
        const clone = document.importNode(template.content, true);

        data.functionsContainer.element.appendChild(clone);
    },

}


const renderFunction = (source, transition, target) => {
    // functionSelectedWrapper
    const functionSelectedWrapper = data.functionSelectedWrapper.element;

    const div = d.createElement("div");
    div.textContent = factoryRenderFunction(source, transition, target);

    functionSelectedWrapper.appendChild(div);

}
// f(A,2)=B
const factoryRenderFunction = (source, transition, target) => {
    let output = `f(${source}, ${transition})=${target}`
    return output;
}


const renderOutputAutomata = (automata) => {
    let stringFunctions = "";

    automata.functions.forEach(f => {
        f.transitions.forEach(t => {
            let functionString = factoryRenderFunction(f.source, t, f.target);
            stringFunctions += `${functionString};`;
        })
    })

    let stringStates = "";
    automata.states.forEach(s => {
        stringStates += `${s},`
    })

    let stringFinalStates = "";
    automata.finalStates.forEach(s => {
        stringFinalStates += `${s},`
    })

    let stringAlphabet = "";
    automata.alphabet.forEach(a => {
        stringAlphabet += `${a},`
    })

    let initialState = automata.initialState;


    const row = d.createElement("tr");

    const tdStates = d.createElement("td");
    tdStates.textContent = stringStates;

    const tdAlphabet = d.createElement("td");
    tdAlphabet.textContent = stringAlphabet;

    const tdFinalState = d.createElement("td");
    tdFinalState.textContent = stringFinalStates;

    const tdFunctions = d.createElement("td");
    tdFunctions.textContent = stringFunctions;

    const tdInitialState = d.createElement("td");
    tdInitialState.textContent = initialState;

    row.appendChild(tdStates)
    row.appendChild(tdAlphabet)
    row.appendChild(tdFunctions)
    row.appendChild(tdInitialState)
    row.appendChild(tdFinalState)


    while (data.tableOutputContainer.element.firstChild) {
        data.tableOutputContainer.element.removeChild(data.tableOutputContainer.element.firstChild);
    }

    const template = document.getElementById("tableOutputTemplate");
    const clone = document.importNode(template.content, true);

    const tableBody = clone.getElementById("tableoutputBody");

    tableBody.appendChild(row);

    data.tableOutputContainer.element.appendChild(clone);


}