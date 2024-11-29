interface List {
    id: number;
    name: string;
}

enum ItemStatus {
    Pending = 'PENDING',
    InProgress = 'IN-PROGRESS',
    Done = 'DONE'
}

interface Item {
    id: number;
    listId: number;
    name: string;
    status: ItemStatus;
}

export type { List, Item, ItemStatus };