export const complement = (automata) => {
    const { states, finalStates } = automata;

    const newFinalStates = states.filter((state) => !finalStates.includes(state));

    const automataResult = JSON.parse(JSON.stringify(automata));
    automataResult.finalStates = newFinalStates;
    
    return automataResult;

}