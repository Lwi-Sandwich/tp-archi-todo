import { Item, List, validateCreateItemDTO } from '../interfaces';
import { FastifyRequest, FastifyReply} from 'fastify';
import { getNextId } from '../services';

async function listLists(this: any, request: FastifyRequest, reply: FastifyReply) {
    const listIter = this.lists.iterator();
    const result: List[] = [];
    for await (const [_, list] of listIter) {
        result.push(JSON.parse(list.toString()));
    }
    reply.send(result);
}

const addToLists = async function(this: any, request: FastifyRequest, reply: FastifyReply) {
    const body = request.body as Omit<List, 'id'>;
    const list = {
        id: await getNextId(this.lists),
        ...body
    };
    await this.lists.put(list.id, JSON.stringify(list));
    Promise.resolve(list).then(list => reply.send(list));
}

const updateList = async function(this: any, request: FastifyRequest<{Params: {listId: string}}>, reply: FastifyReply) {
    const id = parseInt(request.params.listId);
    const body = request.body as Omit<List, 'id'>;
    const list = {
        id,
        ...body
    };
    const oldList = await this.lists.get(id);
    if (!oldList) {
        reply.code(404);
        reply.send({ message: 'List not found' });
        return;
    }
    await this.lists.put(id, JSON.stringify(list));
    return Promise.resolve(list).then(list => reply.send(list));
}

const addItemToList = async function(this: any, request: FastifyRequest<{Params: {listId: string}}>, reply: FastifyReply) {
    const listId = parseInt(request.params.listId);
    const list = await this.lists.get(listId);
    if (!list) {
        reply.code(404);
        reply.send({ message: 'List not found' });
        return;
    }
    const body = request.body
    if (!validateCreateItemDTO(body)){
        reply.code(400);
        reply.send({message: 'Invalid body'});
        return;
    }
    const item = {
        id: await getNextId(this.items),
        listId: listId,
        ...body
    };
    await this.items.put(item.id, JSON.stringify(item));
    Promise.resolve(item).then(item => reply.send(item));
}

const getItemsFromList = async function(this: any, request: FastifyRequest<{Params: {listId: string}}>, reply: FastifyReply) {
    const listId = parseInt(request.params.listId);
    const list = await this.lists.get(listId);
    if (!list) {
        reply.code(404);
        reply.send({ message: 'List not found' });
        return;
    }
    const itemsIter = this.items.iterator();
    const result: Item[] = [];
    for await (const [_, item] of itemsIter) {
        if (JSON.parse(item.toString()).listId === listId){
            result.push(JSON.parse(item.toString()));
        }
    }
    reply.send(result);
}

const deleteItemFromList = async function(this: any, request: FastifyRequest<{Params: {listId: string, id: string}}>, reply: FastifyReply) {
    const listId = parseInt(request.params.listId);
    const id = parseInt(request.params.id);
    const itemsIter = this.items.iterator();
    for await (const [_, it] of itemsIter){
        let item = JSON.parse(it.toString());
        if (item.listId == listId && item.id == id) {
            await this.items.del(id);
            reply.send(item);
            return;
        }
    }
    reply.code(404);
    reply.send({message: 'Item not found'});
}

const updateItem = async function(this: any, request: FastifyRequest<{Params: {listId: string, id: string}}>, reply: FastifyReply) {
    const listId = parseInt(request.params.listId);
    const id = parseInt(request.params.id);
    const body = request.body
    if (!validateCreateItemDTO(body)){
        reply.code(400);
        reply.send({message: 'Invalid body'});
        return;
    }
    const newItem: Item = {
        ...body,
        id: id,
        listId: listId
    };
    const oldItem = await this.items.get(id);
    console.log(oldItem);
    if (!oldItem){
        reply.code(404);
        reply.send({message: 'Item not found'});
        return;
    }
    await this.items.put(id, JSON.stringify(newItem));
    reply.send(newItem);
}

export { listLists, addToLists, updateList, addItemToList, getItemsFromList, deleteItemFromList, updateItem };
