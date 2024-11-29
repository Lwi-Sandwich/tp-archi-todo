import fp from "fastify-plugin";
import level, { FastifyLeveldbOptions} from "@fastify/leveldb"
import sublevel from "subleveldown"

export default fp<FastifyLeveldbOptions>(async (fastify, opts) => {
    fastify.register(level,
        {
            path:"./listdb",
            name: "listdb"
        }
    );
    fastify.after(() => {
        const db = fastify.level.listdb;
        const lists = sublevel(db, "lists", { valueEncoding: "json" });
        const items = sublevel(db, "items", { valueEncoding: "json" });
        fastify.decorate("lists", lists);
        fastify.decorate("items", items);
    });
});