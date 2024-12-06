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