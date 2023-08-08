const express = require('express');
const app = express();
const port = 3000;

const myShoppingList = ['Coffee', 'Creamer', 'Chocolate', 'Coke', 'Thats all I need',
						'No, really', 'Okay, some strawberries', 'And some eggs',
						'two HUNDRED dollars for that?!?!', 'Now Im broke'];

app.get('/:indexOfMyShoppingList', (req, res) => {
    res.send(myShoppingList[req.params.indexOfMyShoppingList]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});