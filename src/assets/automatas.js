export const automatasToreverseTests =
{
    one: {
        states: ["A", "B", "C", "D"],
        alphabet: [1, 0],
        initialState: "A",
        finalStates: ["A", "B", "D"],
        functions: [
            {
                source: "A",
                target: "B",
                transitions: [0]
            },
            {
                source: "B",
                target: "C",
                transitions: [0]
            },
            {
                source: "C",
                target: "C",
                transitions: [0, 1]
            },
            {
                source: "A",
                target: "D",
                transitions: [1]
            },
            {
                source: "B",
                target: "D",
                transitions: [1]
            },
            {
                source: "D",
                target: "D",
                transitions: [0, 1]
            },
        ]
    }
}