const automataOne = {
    states: ["B","D"],
    aphabet: [],
    initialState: "B",
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
    states: ["A","G", "Q"],
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


export const union = (automataOne, automataTwo) => {
    const { states: statesOne, aphabet: aphabetOne, initialState: initialStateOne, finalStates: finalStateOne, functions: functionsOne } = automataOne;
    const { states: statesTwo, aphabet: aphabetTwo, initialState: initialStateTwo, finalStates: finalStateTwo, functions: functionsTwo } = automataTwo;
    
    // Opero
    
    //retorno resultado → automataThree
    
    const automataThree = {
        states: ["A","G", "Q"],
        aphabet: [],
        initialState: automataOne.initialState + automataTwo.initialState,
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
}
union(automataOne, automataTwo)