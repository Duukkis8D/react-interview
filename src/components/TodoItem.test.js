import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TodoItem from './TodoItem'

test( 'renders content', () => {
	const todoItem = {
		id: 1, name: 'Write unit tests to test 1 component well', complete: false
	}

	const component = render(
		<TodoItem todo={ todoItem } />
	)
	expect( component.container ).toHaveTextContent(
		'Write unit tests to test 1 component well'
	)
} )

test.todo( 'incomplete todo item has red borders and Incomplete button with red background color' )
test.todo( 'complete todo item has green borders and Complete button with green background color' )
test.todo( 'todo item with correct name is removed from list' )
test.todo( 'todo item with correct name is added to list' )