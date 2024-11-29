import { FastifyInstance } from "fastify";
import { listLists , addToLists} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
    fastify.get('/', listLists);
    fastify.post('/', addToLists);
}

export default lists;