import React, { useState } from 'react'
import defaultTodos from './todos'
import './App.css'

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
				<Hello
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
		<div className="">
			{ todoItems() }
			<Bar
				onSubmit={ onSubmit }
				newTodoName={ newTodoName }
				onInputChange={ onChange }
			/>
		</div>
	)
}

class Hello extends React.Component {
	render() {
		var color
		var text

		if ( this.props.todo.complete === true ) {
			color = 'lightgreen'
			text = 'Complete'
		} else {
			color = 'pink'
			text = 'Incomplete'
		}

		return (
			<div className="wrapper" style={ { backgroundColor: color } }>
				<h3>{this.props.todo.name}</h3>
				<button
					className="btn"
					onClick={ () => this.props.onClick( this.props.todo.id ) }>
					{text}
				</button>
				<button
					className="btn"
					onClick={ () =>
						this.props.onRemoveClick( this.props.todo.id )
					}>
                    Remove from list
				</button>
			</div>
		)
	}
}

class Bar extends React.Component {
	render() {
		return (
			<form
				className="wrapper"
				style={ { 'grid-template-columns': '7fr 2fr' } }
				onSubmit={ this.props.onSubmit }>
				<input
					placeholder="Add new todo"
					value={ this.props.newTodoName }
					onChange={ this.props.onInputChange }
				/>
				<button
					className="btn btn-success"
					type="submit"
					value="Submit">
                    Submit
				</button>
			</form>
		)
	}
}

export default App
