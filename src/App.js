import React, { useState } from 'react'
import defaultTodos from './data/todos'
import './css/App.css'
import TodoItem from './components/todoItem'
import SubmitTodoBar from './components/submitTodoBar'

const App = () => {
	const [ newTodoName, setNewTodoName ] = useState( '' )
	const [ todos, setTodos ] = useState( defaultTodos )

	const generateNewId = () => {
		return todos.length + 1
	}

	const onSubmit = ( event ) => {
		event.preventDefault()

		const newTodos = todos.slice()
		newTodos.push( {
			id: generateNewId(),
			name: newTodoName,
			complete: false
		} )

		setTodos( newTodos )
		setNewTodoName( '' )
	}

	const onClick = ( id ) => {
		const todoItems = todos.slice()
		for ( let i = 0; i < todos.length; i++ ) {
			if ( todoItems[i].id === id ) {
				const newComplete = !todoItems[i].complete
				todoItems[i].complete = newComplete
			}
		}

		setTodos( todoItems )
	}

	const onChange = ( event ) => {
		setNewTodoName( event.target.value )
	}

	const onRemoveClick = ( id ) => {
		//implement this logic
		console.log( 'Remove Item!', id )
	}

	const todoItems = () => {
		const retVal = []

		for ( let i = 0; i < todos.length; i++ ) {
			const todo = todos[i]
			retVal.push(
				<TodoItem
					key={ todo.id }
					todo={ todo }
					onClick={ () => onClick( todo.id ) }
					onRemoveClick={ () => onRemoveClick( todo.id ) }
				/>
			)
		}

		return retVal
	}

	return (
		<div className=''>
			{ todoItems() }
			<SubmitTodoBar
				onSubmit={ onSubmit }
				newTodoName={ newTodoName }
				onInputChange={ onChange }
			/>
		</div>
	)
}

export default App
