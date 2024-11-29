import { FastifyInstance } from "fastify";
import {
  listLists,
  addToLists,
  deleteFromLists,
  updateList,
  addItemToList} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
  fastify.get("/", listLists);
  fastify.post("/", addToLists);
  fastify.delete("/:id/items/:id", deleteFromLists);
  fastify.put("/:id", updateList);
  fastify.post('/:id/items', addItemToList);
}

export default lists;
