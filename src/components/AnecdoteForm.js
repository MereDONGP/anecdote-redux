import React from 'react'
import { useDispatch } from 'react-redux'
import { AddAnecdote } from '../reducers/Reducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    
    const addNewAnecdote = (event) => {
        event.preventDefault()
        let anecdote = event.target.anecdoteInput.value
        console.log(anecdote)
        dispatch(AddAnecdote(anecdote))
        event.target.anecdoteInput.value = ""
    }
    return(
        <form onSubmit={addNewAnecdote}>
            <input type="text" name="anecdoteInput"/>
            <button type="submit"> Submit Anecdote </button>
        </form>
    )

}

export default AnecdoteForm 