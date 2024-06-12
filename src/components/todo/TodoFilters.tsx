import { TodoFilter, TODO_FILTERS } from '../../const/filters';

type Props = {
    currentFilter: TodoFilter;
    onFilterChange: (type: TodoFilter) => void;
};

export const TodosFilters = ({ onFilterChange, currentFilter }: Props) => {
    return (
        <div className='todos-filters'>
            {TODO_FILTERS.map((filter, i) => {
                return (
                    <button
                        data-testid='todo-filter'
                        key={i}
                        onClick={() => onFilterChange(filter.type)}
                        className={`todos-filter ${currentFilter === filter.type ? 'active' : ''}`}
                    >
                        {filter.label}
                    </button>
                );
            })}
        </div>
    );
};
