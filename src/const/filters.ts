export type TodoFilter = 'all' | 'completed' | 'active';

export const TODO_FILTERS: { label: string; type: TodoFilter }[] = [
    {
        label: 'All',
        type: 'all',
    },
    {
        label: 'Completed',
        type: 'completed',
    },
    {
        label: 'Active',
        type: 'active',
    },
];
