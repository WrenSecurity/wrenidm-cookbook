(function() {
    if (request.method === 'read') {
        return { greeting: 'Hello, World!' };
    } else if (request.method === 'create') {
        if (!request.content.value) {
            throw { code: 400, message: 'Invalid greeting value.' };
        }
        return { greeting: 'Hello, ' + request.content.value + '!' };
    } else {
        throw { code: 400, message: 'Invalid request.' };
    }
})();