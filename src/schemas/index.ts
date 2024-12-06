export const listListsSchema = {
    tags: ['Lists'],
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
    tags: ['Lists'],
    summary: 'Add a new list',
    body: {
        $ref: 'CreateListDTO'
    },
    response: {
        200: {
            descrption: 'Successful response',
            $ref: 'List'
        },
        400: {
            description: 'Invalid list body',
            type: 'object',
            $ref: 'ErrorMessage'
        }
    }
}

export const updateListSchema = {
    tags: ['Lists'],
    summary: 'Update a list',
    parameters: [
        {
            name: 'listId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: {
                type: 'integer'
            }
        }
    ],
    body: {
        $ref: 'CreateListDTO'
    },
    response: {
        200: {
            description: 'Successful response',
            $ref: 'List'
        },
        400: {
            description: 'Invalid list body',
            type: 'object',
            $ref: 'ErrorMessage'
        },
        404: {
            description: 'List not found',
            type: 'object',
            $ref: 'ErrorMessage'
        }
    }
}

export const deleteItemFromListSchema = {
    tags: ['Items'],
    summary: 'Delete an item from a list',
    response: {
        200: {
            description: 'Deleted successfully',
            $ref: 'Item'
        },
        404: {
            description: 'Item not found',
            type: 'object',
            $ref: 'ErrorMessage'
        }
    }
}

export const updateItemSchema = {
    tags: ['Items'],
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
            description: 'Invalid body',
            type: 'object',
            $ref: 'ErrorMessage'
        },
        404: {
            description: 'Item not found',
            type: 'object',
            $ref: 'ErrorMessage'
        }
    }
}
