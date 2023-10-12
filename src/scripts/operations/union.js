const automataOne = {
    states: [],
    aphabet: [],
    initialState: "",
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

const automataTwo = {
    states: ["test"],
    aphabet: [],
    initialState: "A",
    finalStates: ["G", "Q"],
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

union(automataOne, automataTwo)

export const union = (automataOne, automataTwo) => {
    const { states: statesOne, aphabet: aphabetOne, initialState: initialStateOne, finalStates: finalStateOne, functions: functionsOne } = automataOne;
    const { states: statesTwo, aphabet: aphabetTwo, initialState: initialStateTwo, finalStates: finalStateTwo, functions: functionsTwo } = automataTwo;

    // Opero

    //retorno resultado → automataThree

}