import { FastifyInstance } from "fastify";
import {
  listLists,
  addToLists,
  updateList,
  addItemToList,
  getItemsFromList} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
  fastify.get("/", listLists);
  fastify.post("/", addToLists);
  fastify.put("/:listId", updateList);
  fastify.post('/:listId/items', addItemToList);
  fastify.get('/:listId/items', getItemsFromList);
}

export default lists;
