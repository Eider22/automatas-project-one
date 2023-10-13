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
                transition: [0]
            },
            {
                source: "B",
                target: "C",
                transition: [0]
            },
            {
                source: "C",
                target: "C",
                transition: [0, 1]
            },
            {
                source: "A",
                target: "D",
                transition: [1]
            },
            {
                source: "B",
                target: "D",
                transition: [1]
            },
            {
                source: "D",
                target: "D",
                transition: [0, 1]
            },
        ]
    }
}