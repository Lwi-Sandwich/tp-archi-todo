import { FastifyInstance } from "fastify";
import {
  listLists,
  addToLists,
  deleteFromLists,
} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
  fastify.get("/", listLists);
  fastify.post("/", addToLists);
  fastify.delete("/:id/items/:id", deleteFromLists);
}

export default lists;
