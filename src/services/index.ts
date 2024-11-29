export const getNextId = async function(db: any) {
    const iterator = db.iterator({ reverse: true, limit: 1 });
    let lastKey = 0;
    for await (const [key] of iterator) {
        lastKey = key;
    }
    // lastKey is a buffer, so we need to convert it to a number
    return Number(lastKey.toString()) + 1;
}