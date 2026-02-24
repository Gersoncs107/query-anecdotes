const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
    const response = await fetch(baseUrl)
    if (!response.ok) {
        throw new Error('Failed to fetch anecdotes')
    }
    return response.json()
}

export const createAnecdote = async (content) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, votes: 0 })
    }

    const response = await fetch(baseUrl, options)
    if (!response.ok) {
        throw new Error('Failed to create anecdote')
    }
    return response.json()
}