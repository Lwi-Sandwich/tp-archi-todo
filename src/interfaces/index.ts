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

type CreateItemDTO = Omit<Item, 'id' | 'listId'>;
type CreateListDTO = Omit<List, 'id'>;

// Validation function
function validateCreateItemDTO(body: any): body is CreateItemDTO {
    // Check if 'name' is a non-empty string
    if (typeof body.name !== 'string' || body.name.trim() === '') {
        return false;
    }
    // Check if 'status' is a valid enum value
    if (!Object.values(ItemStatus).includes(body.status)) {
        return false;
    }
    return true;
}

export type { List, Item, CreateItemDTO, CreateListDTO };
export { ItemStatus, validateCreateItemDTO };