const handleGlobalErrors = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.log("syntax error");
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    else if (err.name === 'CastError') {
        return res.status(400).json({ error: 'Invalid Route Path' })
    }
    else if (err === 'This is an invalid ID') {
        return res.status(400).json({ error: 'Wrong Access ID' })
    }
    else if (err.name === 'ValidationError') {
        return res.status(400).json({ error: 'Entered Data Is Invalid' })
    }
    res.status(500).json({ error: 'Something went wrong :(' });
};

module.exports = { handleGlobalErrors };
