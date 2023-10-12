const states = [];

export const addState = (newState) => {
    const stateExist = states.find((state) => state === newState);
    if (stateExist) {
        console.log("El estado ya existe")
        return false;
    }
    states.push(newState);
    return true;
}

export const getStates = () => {
    return states;
}