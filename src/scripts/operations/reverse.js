export const reverse = (automata) => {
    const automataResult = JSON.parse(JSON.stringify(automata));

    // Si solo existe un estado de aceptación
    if (automataResult.finalStates.length == 1) {
        // 1- Cambiar de orientación todas las transiciones
        automataResult.functions.forEach(func => {
            const sourceAux = func.source;
            func.source = func.target;
            func.target = sourceAux;
        });
        // 2-  EL estado inicial se convierte en el estado de aceptación
        const initialStateAux = automataResult.initialState;
        automataResult.initialState = automataResult.finalStates[0];
        // 3 - El estado de aceptación se convierte en el estado inicial
        automataResult.finalStates[0] = initialStateAux;
        // 4-Limpiar estados inalcanzables
        // Se revisan estados que en las funciones no sean target por lo menos una vez y 
        // que de serlo no sean target de si mismos
        
    }



    // Si existen varios estados de aceptación, se
    // 1- crea un nuevo estado que será el único estado de aceptación,
    // 2- después creamos transiciones lambda  desde los estados que anteriormente eran finales 
    // hacia este nuevo estado final
    // 3- Cambiar de orientación todas las transiciones
    // 4- El estado de aceptación se convierte en el estado inicial
    // 5- EL estado inicial se convierte en el estado de aceptación


    console.log(automata)
}