export const intersection = (automataOne, automataTwo) => {
    const { states: statesOne, alphabet: alphabetOne, initialState: initialStateOne, finalStates: finalStatesOne, functions: functionsOne } = automataOne;
    const { states: statesTwo, alphabet: alphabetTwo, initialState: initialStateTwo, finalStates: finalStatesTwo, functions: functionsTwo } = automataTwo;


    /**
     * Para calcular los estados de la nueva automata, debemos realizar
     * todas las combinaciones posibles entre los estados del automata 1 con la automata 2
     * Declaramos variable llamada nuevo estados es una arreglo
     * realizamos un bucle para recorrer los estados de automata 1
     * realizamos un segundo bucle dentro del primer para recorrer el automata 2
     * vamos guardando las combinaciones en la variable nuevo estados.
     */

    const newStates = [];

    for (const eAutomO of statesOne) {
        for (const eAutoT of statesTwo) {
            newStates.push(eAutomO + eAutoT);
        }
    }

    /**
     * Para determinar el alfabeto de la nueva automata 
     * debemos hacer el proceso de la interseccion para que el alfabeto sea el mismo
     */

    const newAlphabet = alphabetOne.filter(symbol => alphabetTwo.includes(symbol));

    /**
     * para el estado inicial como sabemos solo puede existir uno, 
     * asi que sera la combinacion de los dos estados iniciales de las 2 
     * automatas originales.
     */
    const newInitialState = initialStateOne + initialStateTwo;

    /**
     * Para los estados finales la condicion de interseccion es que en ambas
     * automatas deben ser estados finales, asi que utilizamos el arreglo de 
     * estados finales y los recorremos para crear las combinaciones, como lo
     * hicimos inicialmente para crear loso nuevos estados para la automata
     */
    const newFinalStates = [];
    for (const stateOne of finalStatesOne) {
        for (const stateTwo of finalStatesTwo) {
            newFinalStates.push(stateOne + stateTwo);
        }
    }

    /**
     * Declaramos la variable para almacenar las nuevas transiciones 
     * de la automata resultante de la interseccion
     * se debe validar cada una de las fucniones en cuanto al estado de la automata 1
     * y la transicion de la automata 2 con ese mismo valor, para asi determinar a que estado se dirije,
     * asi debe hacerse con todos las combinaciones creadas
    */

    const newFunctions = [];
    for (const stateOneN of newStates) {
        for (const symbol of newAlphabet) {
            const sourceStateOne = stateOneN.substr(0, 1); //
            const sourceStateTwo = stateOneN.substr(1, 1);

            const targetStateOne = functionsOne.find(func => func.source === sourceStateOne && func.transitions.includes(symbol))?.target;
            const targetStateTwo = functionsTwo.find(func => func.source === sourceStateTwo && func.transitions.includes(symbol))?.target;

            if (targetStateOne && targetStateTwo) {
                const targetState = targetStateOne + targetStateTwo;
                newFunctions.push({
                    source: stateOneN,
                    target: targetState,
                    transitions: symbol
                });
            }
        }
    }


    /**
     * Finalmente los valores obtenidos los agregamos en la nueva automata
     * y la retornamos 
     */

    const newAutomaInt = {
        states: newStates,
        alphabet: newAlphabet,
        initialState: newInitialState,
        finalStates: newFinalStates,
        functions: newFunctions
    };

    return newAutomaInt;
}

/**
 * dado el caso que quieran probrarlo 
 * cambian de export const Intersection 
 * a const Intersection 
 * 
 * y agregan al final de todo 
 * module.exports = {
    Intersection
};
 * const resultAutomatonInt = intersection(automataOne, automataTwo);
    console.log(resultAutomaton);
 * 
 */