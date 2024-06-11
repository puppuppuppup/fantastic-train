import { useEffect, useState } from 'react';

export type TodoType = {
    index: number;
    title: string;
    isCompleted: boolean;
};

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);
    const [activeTodos, setActiveTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        const completedTodos: TodoType[] = [];
        const activeTodos: TodoType[] = [];
        todos.forEach(todo => {
            todo.isCompleted ? completedTodos.push(todo) : activeTodos.push(todo);
        });
        setCompletedTodos(completedTodos);
        setActiveTodos(activeTodos);
    }, [todos]);

    const addTodo = (title: string) => {
        setTodos(prev => [
            ...prev,
            { index: prev[prev.length - 1]?.index + 1 || 0, title, isCompleted: false },
        ]);
    };

    const deleteTodo = (todoIndex: number) => {
        setTodos(prev => prev.filter(todo => todo.index !== todoIndex));
    };

    const deleteCompletedTodos = () => {
        setTodos(prev => prev.filter(todo => !todo.isCompleted));
    };

    const toggleTodoCompleted = (todoIndex: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todoIndex === todo.index ? { ...todo, isCompleted: !todo.isCompleted } : todo,
            ),
        );
    };

    return {
        todos,
        activeTodos,
        completedTodos,
        addTodo,
        deleteTodo,
        deleteCompletedTodos,
        toggleTodoCompleted,
    };
};
