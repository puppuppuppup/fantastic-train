import { TodoType } from '../../hooks/useTodos';
import { TiTick } from 'react-icons/ti';
import { RxCrossCircled } from 'react-icons/rx';
import './styles.css';

type Props = {
    todo: TodoType;
    onClick: () => void;
    onDelete: () => void;
};

export const Todo = ({ todo, onClick, onDelete }: Props) => {
    return (
        <div onClick={onClick} className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <span className='todo-tick'>
                <TiTick />
            </span>
            <span className='todo-title'>{todo.title}</span>
            <button
                className='todo-delete'
                onClick={e => {
                    e.stopPropagation();
                    onDelete();
                }}
            >
                <RxCrossCircled />
            </button>
        </div>
    );
};
