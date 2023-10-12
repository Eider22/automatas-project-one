export const reverse = (automata) => {
    const automataResult = JSON.parse(JSON.stringify(automata));

    // Si solo existe un estado de aceptación
    if (automataResult.finalStates.length == 1) {
        // 1- Cambiar de orientación todas las transiciones
        changeTransitionsOrientation(automataResult);
        exchangeBetweenFinalAndInitialStates(automataResult)
        // 4-Limpiar estados inalcanzables
        // Se revisan estados que en las funciones no sean target por lo menos una vez y 
        // que de serlo no sean target de si mismos
        clearUnreachableStates(automata);

    } else {
        // Si existen varios estados de aceptación, se
        // 1- crea un nuevo estado que será el único estado de aceptación,
        const newState = "#";
        automataResult.states.push(newState)
        // 2- después creamos transiciones lambda  desde los estados que anteriormente eran finales 
        // hacia este nuevo estado final

        insertLambdas(automataResult, newState)

        /**El nuevo se convirte en el final y los otros en normales */
        automataResult.finalStates = [newState]

        // 3- Cambiar de orientación todas las transiciones
        changeTransitionsOrientation(automataResult)
        // // 4-  EL estado inicial se convierte en el estado de aceptación
        exchangeBetweenFinalAndInitialStates(automataResult)

        // 4-Limpiar estados inalcanzables
        // Se revisan estados que en las funciones no sean target por lo menos una vez y 
        // que de serlo no sean target de si mismos
        clearUnreachableStates(automataResult);
    }
    return automataResult;

}

const changeTransitionsOrientation = (automata) => {
    // 1- Cambiar de orientación todas las transiciones
    automata.functions.forEach(func => {
        const sourceAux = func.source;
        func.source = func.target;
        func.target = sourceAux;
    });
}


const exchangeBetweenFinalAndInitialStates = (automata) => {
    // 2-  EL estado inicial se convierte en el estado de aceptación
    const initialStateAux = automata.initialState;
    automata.initialState = automata.finalStates[0];
    // 3 - El estado de aceptación se convierte en el estado inicial
    automata.finalStates[0] = initialStateAux;
}

const clearUnreachableStates = (automata) => {
    // 4-Limpiar estados inalcanzables
    // Se revisan estados que en las funciones no sean target por lo menos una vez y 
    // que de serlo no sean target de si mismos
    let stateToDelte = [];
    let counter = 0;

    automata.states.forEach(s => {
        automata.functions.forEach(f => {
            if (f.target == s && f.source !== s) {
                counter++;
            }
        })
        if (counter == 0) {
            stateToDelte.push(s);
        }
        counter = 0;
    })


    stateToDelte = stateToDelte.filter(s => s != automata.initialState[0]);
    automata.states = automata.states.filter(s => !stateToDelte.includes(s))

    automata.functions = automata.functions.filter(f => !stateToDelte.includes(f.source) && !stateToDelte.includes(f.target))
}

const insertLambdas = (automata, newState) => {
    automata.finalStates.forEach(fs => {
        automata.functions.push(
            {
                source: fs,
                target: newState,
                transition: ["Lambda"]
            }
        )
    })
}