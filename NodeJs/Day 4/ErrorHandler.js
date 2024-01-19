const handleGlobalErrors = (err, req, res, next) => {
    console.error(err.stack);

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.log("syntax error");
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    else if (err === 'Wrong Password') {
        return res.status(400).json({ error: err });
    }
    else if (err === 'User Not Found in DB') {
        return res.status(400).json({ error: err });
    }
    else if (err.name === 'MongoServerError') {
        return res.status(400).json({ error: 'Duplicate User Name' });
    }
    res.status(500).json({ error: 'Something went wrong :(' });
};

module.exports = { handleGlobalErrors };
