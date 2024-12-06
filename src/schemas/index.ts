export const listListsSchema = {
    tags: ['lists'],
    summary: 'List all the lists',
    response: {
        200: {
            description: 'Successful response',
            type: 'array',
            items: {
                $ref: 'List'
            }
        }
    }
}

export const addListSchema = {
    tags: ['lists'],
    summary: 'Add a new list',
    body: {
        $ref: 'CreateListDTO'
    }
}

export const deleteItemFromListSchema = {
    tags: ['lists'],
    summary: 'Delete an item from a list',
    response: {
        200: {
            description: 'Deleted successfully',
            $ref: 'Item'
        },
        404: {
            description: 'Item not found'
        }
    }
}

export const updateItemSchema = {
    tags: ['lists'],
    summary: 'Update an item',
    body: {
        $ref: 'CreateItemDTO'
    },
    response: {
        200: {
            description: 'Updated successfully',
            $ref: 'Item'
        },
        400: {
            description: 'Invalid body'
        },
        404: {
            description: 'Item not found'
        }
    }
}