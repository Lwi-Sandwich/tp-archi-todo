import { List } from "../interfaces";
import { FastifyRequest, FastifyReply } from "fastify";

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

const updateList = async function (
  this: any,
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const id = parseInt(request.params.id);
  console.log(request.params);
  const list: List = request.body as List;
  console.log(list);
  if (list.id !== id) {
    reply.code(400);
    reply.send({ message: "ID in body does not match ID in URL" });
    return;
  }
  const oldList = await this.level.listdb.get(id);
  if (!oldList) {
    reply.code(404);
    reply.send({ message: "List not found" });
    return;
  }
  await this.level.listdb.put(id, JSON.stringify(list));
  return Promise.resolve(list).then((list) => reply.send(list));
};

export { listLists, addToLists, updateList, deleteFromLists };
