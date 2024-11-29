import { Item, List } from '../interfaces';
import { FastifyRequest, FastifyReply} from 'fastify';
import { getNextId } from '../services';

async function listLists(
  this: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  const listIter = this.level.listdb.iterator();
  const result: List[] = [];
  for await (const [_, list] of listIter) {
    result.push(JSON.parse(list.toString()));
  }
  reply.send(result);
}

const addToLists = async function (
  this: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  const list: List = request.body as List;
  await this.level.listdb.put(list.id, JSON.stringify(list));
  Promise.resolve(list).then((list) => reply.send(list));
};

const deleteFromLists = async function (
  //TODO: Finish this
  this: any,
  request: FastifyRequest,
  reply: FastifyReply
) {
  const entryToDelete: List = request.body as List;
  const listIter = this.level.listdb.iterator();
  const result: List[] = [];
  const { id, idItem }: any = request.params;
  for await (const [_, list] of listIter) {
    console.log(id);
    if (JSON.parse(list.toString()).id == id) {
      console.log(list);
    }
  }
  // await this.level.listdb.del(idItem);
};
const updateList = async function(this: any, request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
    const id = parseInt(request.params.id);
    const list: List = request.body as List;
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
    Promise.resolve(list).then(list => reply.send(list));
}

const addItemToList = async function(this: any, request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
    const id = parseInt(request.params.id);
    const item: Item = request.body as Item;
    item.id = await getNextId(this.level.itemdb);
    if (item.listId !== id) {
        reply.code(400);
        reply.send({ message: 'List ID in body does not match ID in URL' });
        return;
    }
    await this.level.itemdb.put(item.id, JSON.stringify(item));
    Promise.resolve(item).then(item => reply.send(item));
}

export { listLists, addToLists, updateList, addItemToList, deleteFromLists };
