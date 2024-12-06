export interface List {
    id: number;
    name: string;
}

export enum ItemStatus {
    Pending = 'PENDING',
    InProgress = 'IN-PROGRESS',
    Done = 'DONE'
}

export interface Item {
    id: number;
    listId: number;
    name: string;
    status: ItemStatus;
}

export type CreateItemDTO = Omit<Item, 'id' | 'listId'>;
export type CreateListDTO = Omit<List, 'id'>;

// Validation function
export function validateCreateItemDTO(body: any): body is CreateItemDTO {
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

export function validateCreateListDTO(body: any): body is CreateListDTO {
    return typeof body.name === "string" && body.name.trim() !== '';
}
