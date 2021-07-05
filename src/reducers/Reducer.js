const AnecdoteReducer = (state = [], action) =>{
    switch(action.type){
        case 'addAnecdote':
            return state.concat(action.data)
        case 'vote':
            let anecdoteChange = state.find(anecdote => anecdote.id === action.id)
            let newAnecdote = {
                ...anecdoteChange, votes: anecdoteChange.votes + 1
            }
            let newData = state.map(anec => anec.id === anecdoteChange.id ? newAnecdote : anec)
            return newData.sort((a, b) => b.votes - a.votes)
        default:
            return state
    }
}

export default AnecdoteReducer