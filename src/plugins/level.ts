import fp from "fastify-plugin";
import level, { FastifyLeveldbOptions } from "@fastify/leveldb"

export default fp<FastifyLeveldbOptions>(async (fastify, opts) => {
    fastify.register(level,
        {
            path:"./listdb",
            name: "listdb"
        }
    );
    fastify.register(level,
        {
            path:"./itemdb",
            name: "itemdb"
        }
    );
});