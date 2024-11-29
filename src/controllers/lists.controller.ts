import { List } from '../interfaces';
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
    const list: List = request.body as List;
    list.id = await getNextId(this.lists);
    await this.lists.put(list.id, JSON.stringify(list));
    Promise.resolve(list).then(list => reply.send(list));
}

const updateList = async function(this: any, request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
    const id = parseInt(request.params.id);
    console.log(request.params);
    const list: List = request.body as List;
    console.log(list);
    if (list.id !== id) {
        reply.code(400);
        reply.send({ message: 'ID in body does not match ID in URL' });
        return;
    }
    const oldList = await this.lists.get(id);
    if (!oldList) {
        reply.code(404);
        reply.send({ message: 'List not found' });
        return;
    }
    await this.lists.put(id, JSON.stringify(list));
    return Promise.resolve(list).then(list => reply.send(list));
}

export { listLists, addToLists, updateList };