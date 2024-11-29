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

export { listLists, addToLists };