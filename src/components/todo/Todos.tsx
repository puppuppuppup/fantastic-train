import { useState } from 'react';
import { TodoFilter } from '../../const/filters';
import { useTodos } from '../../hooks/useTodos';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import './styles.css';
import { TodosFilters } from './TodoFilters';
import { TodosList } from './TodosList';

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

    const onFilterChange = (type: TodoFilter) => {
        if (type === filter) {
            return;
        }
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
            <TodosFilters currentFilter={filter} onFilterChange={onFilterChange} />
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
