import { TodoType } from '../../hooks/useTodos';
import { Todo } from './Todo';

type Props = {
    todos: TodoType[];
    onToggleCompleted: (index: number) => void;
    onDelete: (index: number) => void;
};

export const TodosList = ({ todos, onToggleCompleted, onDelete }: Props) => {
    return (
        <div className='todos-list'>
            {todos.length > 0 ? (
                todos.map((todo, i) => (
                    <Todo
                        key={i}
                        todo={todo}
                        onClick={() => onToggleCompleted(todo.index)}
                        onDelete={() => onDelete(todo.index)}
                    />
                ))
            ) : (
                <span>No items yet</span>
            )}
        </div>
    );
};
