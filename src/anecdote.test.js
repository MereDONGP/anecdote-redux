import AnecdoteReducer from "./reducers/Reducer"

const initial = [{id: 1, anecdote: 'here is the next', votes: 0},{id: 2, anecdote: 'here is the second test', votes: 0}]


describe('testing the application', () => {
    const vote = {
        type: 'vote',
        id: 2
    }
    test('testing getting the note index and votes', () => {
        let testvote = AnecdoteReducer(initial, vote)
        expect(testvote).toEqual([{id: 2, anecdote: 'here is the second test', votes: 1}, {id: 1, anecdote: 'here is the next', votes: 0}])
    })
    test('adding in the new Anecdote', () => {
        const newAnecdote = {
            type: 'addAnecdote',
            data: {
                id:3,
                anecdote:'here is the third note',
                votes:0
            }
        }
        let testadding = AnecdoteReducer(initial, newAnecdote)
        expect(testadding.length).toEqual(3)
    })
})
