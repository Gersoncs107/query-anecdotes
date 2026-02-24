import { useMutation } from "@tanstack/react-query"
import { createAnecdode } from "../requests"

const AnecdoteForm = () => {
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdode,
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
