import { FastifyInstance } from "fastify";
import { listLists , addToLists, updateList} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
    fastify.get('/', listLists);
    fastify.post('/', addToLists);
    fastify.put('/:id', updateList);
}

export default lists;