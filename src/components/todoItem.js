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
				id='btn-complete'
				className='btn'
				style={ { backgroundColor: color } }
				onClick={ () => onClick( todo.id ) }>
				{ text }
			</button>
			<button
				id='btn-remove'
				className='btn'
				onClick={ () => onRemoveClick( todo.id ) }>
					Remove from list
			</button>
		</div>
	)
}

export default TodoItem