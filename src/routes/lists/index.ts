import { FastifyInstance } from "fastify";
import { addListSchema, listListsSchema } from "../../schemas"
import {
	listLists,
	addToLists,
	updateList,
	addItemToList,
	getItemsFromList,
	deleteItemFromList,
	updateItem} from "../../controllers/lists.controller";

async function lists(fastify: FastifyInstance) {
	fastify.get("/", {schema: listListsSchema}, listLists);
	fastify.post("/", {schema: addListSchema}, addToLists);
	fastify.put("/:listId", updateList);
	fastify.post('/:listId/items', addItemToList);
	fastify.get('/:listId/items', getItemsFromList);
	fastify.delete('/:listId/items/:id', deleteItemFromList);
	fastify.put('/:listId/items/:id', updateItem);
}

export default lists;