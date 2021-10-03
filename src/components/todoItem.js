import React from 'react'

const TodoItem = ( { todo, onClick, onRemoveClick } ) => {
	let color
	let text

	if ( todo.complete === true ) {
		color = 'green'
		text = 'Complete'
	} else {
		color = 'red'
		text = 'Incomplete'
	}

	return (
		<div className='wrapper' style={ { borderColor: color } }>
			<h2>{ todo.name }</h2>
			<button
				className='btn btn-complete'
				style={ { backgroundColor: color } }
				onClick={ () => onClick( todo.id ) }>
				{ text }
			</button>
			<button
				className='btn btn-remove'
				onClick={ () => onRemoveClick( todo.id ) }>
					Remove from list
			</button>
		</div>
	)
}

export default TodoItem