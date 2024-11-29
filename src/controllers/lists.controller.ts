import { Item, List } from '../interfaces';
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
    const body = request.body as Omit<Item, 'id' | 'listId'>;
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

export { listLists, addToLists, updateList, addItemToList, getItemsFromList };
