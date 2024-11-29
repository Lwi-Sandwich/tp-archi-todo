import { FastifyInstance } from "fastify";
import { listLists , addToLists, updateList, addItemToList} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
    fastify.get('/', listLists);
    fastify.post('/', addToLists);
    fastify.put('/:id', updateList);
    fastify.post('/:id/items', addItemToList);
}

export default lists;