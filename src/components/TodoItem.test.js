import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TodoItem from './TodoItem'

let todoItem

beforeAll( () => {
	todoItem = {
		id: 1, name: 'Write unit tests to test 1 component well', complete: false
	}
} )

test( 'renders content', () => {
	const component = render(
		<TodoItem todo={ todoItem } />
	)
	expect( component.container ).toHaveTextContent(
		'Write unit tests to test 1 component well'
	)
} )

test.todo( 'incomplete todo item is <color here>' )
test.todo( 'complete todo item is <color here>' )
test.todo( 'todo item with correct name is removed from list' )
test.todo( 'todo item with correct name is added to list' )