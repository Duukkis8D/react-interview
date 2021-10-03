import React from 'react'

const SubmitTodoBar = ( { onSubmit, newTodoName, onInputChange } ) => {
	return (
		<form
			className='wrapper'
			onSubmit={ onSubmit }>
			<input
				placeholder='Add new todo'
				value={ newTodoName }
				onChange={ onInputChange }
			/>
			<button
				id='btn-success'
				className='btn'
				type='submit'
				value='Submit'>
					Submit
			</button>
		</form>
	)
}

export default SubmitTodoBar