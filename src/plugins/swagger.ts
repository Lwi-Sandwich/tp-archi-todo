import fp from "fastify-plugin";
import swagger, { FastifySwaggerOptions } from "@fastify/swagger";
import JsonSchemas from '../schemas/all.json'

export default fp<FastifySwaggerOptions>(async (fastify) => {
	fastify.addSchema({
		$id: 'List',
		...JsonSchemas.definitions.List
	});
	fastify.addSchema({
		$id: 'Item',
		...JsonSchemas.definitions.Item
	});
		fastify.addSchema({
		$id: 'CreateListDTO',
		...JsonSchemas.definitions.CreateListDTO
	});
	fastify.addSchema({
		$id: 'ErrorMessage',
		type: 'object',
		properties: {
			message: { type: 'string' }
		}
	});

    fastify.register(swagger, {
        openapi: {
            info: { title: 'Todo API', version: '1.0.0' },
            servers: [
				{
					url: 'http://localhost:3000',
					description: 'Development server'
				}
            ]
        }
    });
});
