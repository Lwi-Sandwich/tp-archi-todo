import { FastifyInstance } from "fastify";
import { addItemToListSchema, addListSchema, deleteItemFromListSchema, getItemsFromListSchema, listListsSchema, updateItemSchema, updateListSchema } from "../../schemas"
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
	fastify.put("/:listId", {schema: updateListSchema}, updateList);
	fastify.post('/:listId/items', {schema: addItemToListSchema}, addItemToList);
	fastify.get('/:listId/items', {schema: getItemsFromListSchema}, getItemsFromList);
	fastify.delete('/:listId/items/:id', {schema: deleteItemFromListSchema}, deleteItemFromList);
	fastify.put('/:listId/items/:id', {schema: updateItemSchema}, updateItem);
}

export default lists;