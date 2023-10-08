const states = [];

export const addState = (newState) => {
    const stateExist = states.find((state) => state === newState);
    if (stateExist) {
        console.log("El estado ya existe")
        return;
    }
    states.push(newState);

}

export const getStates = (newState) => {
    return states;
}