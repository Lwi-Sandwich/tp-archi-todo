interface List {
    id: string;
    name: string;
}

enum TaskStatus {
    Pending = 'PENDING',
    InProgress = 'IN-PROGRESS',
    Done = 'DONE'
}

interface Task {
    id: number;
    listId: number;
    name: string;
    status: TaskStatus;
}

export type { List, Task, TaskStatus };