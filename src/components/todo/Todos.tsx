import { useState } from 'react';
import { useTodos } from '../../hooks/useTodos';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import './styles.css';
import { TodosList } from './TodosList';

type TodoFilter = 'all' | 'completed' | 'active';

export const Todos = () => {
    const {
        activeTodos,
        completedTodos,
        todos,
        addTodo,
        deleteCompletedTodos,
        deleteTodo,
        toggleTodoCompleted,
    } = useTodos();
    const [filter, setFilter] = useState<TodoFilter>('all');
    const [todoName, setTodoName] = useState('');

    const onAddTodo = () => {
        if (todoName.length < 1) {
            alert('Todo name must have more than 1 symbol!');
            return;
        }
        addTodo(todoName);
    };

    const onChangeFilter = (type: TodoFilter) => {
        setFilter(type);
    };

    return (
        <div className='todos'>
            <span>{todos.filter(todo => !todo.isCompleted).length} item(-s) left</span>
            <div className='todos-add'>
                <Input
                    placeholder='Name your todo...'
                    value={todoName}
                    onChange={e => setTodoName(e.target.value)}
                />
                <Button onClick={onAddTodo}>Add todo</Button>
                <Button onClick={deleteCompletedTodos}>Delete completed</Button>
            </div>
            <div className='todos-filters'>
                <button
                    onClick={() => onChangeFilter('all')}
                    className={`todos-filter ${filter === 'all' ? 'active' : ''}`}
                >
                    All
                </button>
                <button
                    onClick={() => onChangeFilter('completed')}
                    className={`todos-filter ${filter === 'completed' ? 'active' : ''}`}
                >
                    Completed
                </button>
                <button
                    onClick={() => onChangeFilter('active')}
                    className={`todos-filter ${filter === 'active' ? 'active' : ''}`}
                >
                    Active
                </button>
            </div>
            <TodosList
                todos={
                    filter === 'active'
                        ? activeTodos
                        : filter === 'completed'
                          ? completedTodos
                          : todos
                }
                onToggleCompleted={toggleTodoCompleted}
                onDelete={deleteTodo}
            />
        </div>
    );
};
