import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TodoItem from './TodoItem'

const getRenderedTodoItem = ( todoItem ) => {
	return render(
		<TodoItem todo={ todoItem } />
	)
}

const incompleteTodoItem = {
	id: 1, name: 'This is an incomplete task', complete: false
}

const completeTodoItem = {
	id: 1, name: 'This is a complete task', complete: true
}

describe( 'tests with incomplete todo item', () => {
	test( 'todo item has correct name', () => {
		const h2 = getRenderedTodoItem( incompleteTodoItem ).container.querySelector( 'h2' )
		expect( h2 ).toHaveTextContent( /^This is an incomplete task$/ )
	} )
	
	test( 'todo item has red borders', () => {
		const div = getRenderedTodoItem( incompleteTodoItem ).container.querySelector( '.wrapper' )
		expect( div ).toHaveStyle( 'border-color: red' )
	} )
	
	test( 'Incomplete button has red background color', () => {
		const button = getRenderedTodoItem( incompleteTodoItem ).container.querySelector( '.btn-complete' )
		expect( button ).toHaveStyle( 'background-color: red' )
	} )
	
	test( 'Incomplete button has Incomplete text', () => {
		const button = getRenderedTodoItem( incompleteTodoItem ).container.querySelector( '.btn-complete' )
		expect( button ).toHaveTextContent( /^Incomplete$/ )
	} )
} )

describe( 'tests with complete todo item', () => {
	test( 'todo item has green borders', () => {
		const div = getRenderedTodoItem( completeTodoItem ).container.querySelector( '.wrapper' )
		expect( div ).toHaveStyle( 'border-color: green' )
	} )

	test( 'Complete button has green background color', () => {
		const button = getRenderedTodoItem( completeTodoItem ).container.querySelector( '.btn-complete' )
		expect( button ).toHaveStyle( 'background-color: green' )
	} )

	test( 'Complete button has Complete text', () => {
		const button = getRenderedTodoItem( completeTodoItem ).container.querySelector( '.btn-complete' )
		expect( button ).toHaveTextContent( /^Complete$/ )
	} )
} )