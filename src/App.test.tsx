import { act } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

//
//
// VARS
//
//

let addBtn: HTMLButtonElement;
let addInput: HTMLInputElement;

//
//
// CUSTOM FNS
//
//

const addTodos = (amount: number) => {
    act(() => {
        for (let i = 0; i < amount; i++) {
            userEvent.type(addInput, 'New todo 1');
            userEvent.click(addBtn);
        }
    });
};
const clickTodos = (amount: number) => {
    act(() => {
        const todos = document.querySelectorAll('.todo');
        for (let i = 0; i < amount; i++) {
            userEvent.click(todos[i]);
        }
    });
};

const clickTab = (filterElem: HTMLElement, expectedLength: number) => {
    userEvent.click(filterElem);
    const todos = document.querySelectorAll('.todo');
    expect(todos).toHaveLength(expectedLength);
};

//
//
// TESTS
//
//

beforeEach(() => {
    render(<App />);
    addBtn = screen.getByText(/add todo/i);
    addInput = screen.getByPlaceholderText(/name your todo/i);
    expect(addInput).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
});

it('Add todos', () => {
    addTodos(3);
    const todos = document.querySelectorAll('.todo');
    expect(todos).toHaveLength(3);
});

it('Make todos completed', () => {
    const TODO_COUNT = 3;
    const TODO_COUNT_CLICKED = 2;

    addTodos(TODO_COUNT);
    clickTodos(TODO_COUNT_CLICKED);
    const completedTodos = document.querySelectorAll('.todo.completed');
    expect(completedTodos).toHaveLength(TODO_COUNT_CLICKED);
});

it('Filter tabs', () => {
    const TODO_COUNT = 5;
    const TODO_COUNT_CLICKED = 2;

    addTodos(TODO_COUNT);
    clickTodos(TODO_COUNT_CLICKED);

    const [all, completed, active] = screen.queryAllByTestId('todo-filter');

    clickTab(completed, TODO_COUNT_CLICKED);
    clickTab(active, TODO_COUNT - TODO_COUNT_CLICKED);
    clickTab(all, TODO_COUNT);
});

it('Delete completed', () => {
    const TODO_COUNT = 5;
    const TODO_COUNT_CLICKED = 2;

    addTodos(TODO_COUNT);
    clickTodos(TODO_COUNT_CLICKED);

    const deleteCompletedBtn = screen.getByText(/Delete completed/i);
    userEvent.click(deleteCompletedBtn);

    const todos = document.querySelectorAll('.todo');
    expect(todos).toHaveLength(TODO_COUNT - TODO_COUNT_CLICKED);
});

it('Todos counter', () => {
    const TODO_COUNT = 5;
    const TODO_COUNT_CLICKED = 4;

    addTodos(TODO_COUNT);
    clickTodos(TODO_COUNT_CLICKED);
    const todos = document.querySelectorAll('.todo');

    const counter = screen.getByText(/item\(-s\) left/);
    const todosCounted = +String(counter.textContent).split(' ')[0];

    expect(todosCounted).toEqual(TODO_COUNT - TODO_COUNT_CLICKED);
});
