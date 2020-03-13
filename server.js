const express = require('express');
const app = express();
const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]
app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'got the users!',
        users: mockUserData
    })
});
app.get('/users/:id', (req, res) => {
    console.log(`got user ${req.params.id}!`);
    res.json({
        success: true,
    message: `got user ${req.params.id}!`,
        users: req.params.id
    })
});
app.listen(8000, () => { console.log('server is running'); })