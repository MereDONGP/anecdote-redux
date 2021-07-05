import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Vote } from '../reducers/Reducer'

const Anecdotes = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state)
    return(
        <div>
            <ul>
                {posts.map(pos => {
                    return <li key={pos.id}>
                        {pos.Anecdote} {pos.votes} <button onClick={() => dispatch(Vote(pos.id))}> Vote </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Anecdotes