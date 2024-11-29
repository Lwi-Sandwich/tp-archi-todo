import { List } from '../interfaces';
import { FastifyRequest, FastifyReply } from 'fastify';

async function listLists(this: any, request: FastifyRequest, reply: FastifyReply) {
    const listIter = this.level.listdb.iterator();
    const result: List[] = [];
    for await (const [_, list] of listIter) {
        result.push(JSON.parse(list.toString()));
    }
    reply.send(result);
}

const addToLists = async function(this: any, request: FastifyRequest, reply: FastifyReply) {
    const list: List = request.body as List;
    await this.level.listdb.put(list.id, JSON.stringify(list));
    Promise.resolve(list).then(list => reply.send(list));
}

const updateList = async function(this: any, request: FastifyRequest, reply: FastifyReply) {
    const { idAny }: any = request.params;
    const id = parseInt(idAny);
    const list: List = request.body as List;
    console.log(list);
    if (list.id !== id) {
        reply.code(400);
        reply.send({ message: 'ID in body does not match ID in URL' });
        return;
    }
    const oldList = await this.level.listdb.get(id);
    if (!oldList) {
        reply.code(404);
        reply.send({ message: 'List not found' });
        return;
    }
    await this.level.listdb.put(id, JSON.stringify(list));
}

export { listLists, addToLists, updateList };