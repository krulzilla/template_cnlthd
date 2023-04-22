const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    return res.sendFile(path.resolve('home.html'))
})

app.get('/products', async (req, res) => {
    return res.json([
        {
            id: 1,
            name: 'SamSung S23',
            description: 'A SamSung Phone',
            price: 1000,
            quantity: 10
        },
        {
            id: 2,
            name: 'Iphone 13',
            description: 'A Iphone Phone',
            price: 890,
            quantity: 5
        }
    ]);
})

app.post('/addProduct', async (req, res) => {
    // return res.json({
    //     status: "success",
    //     msg: "Created a new product"
    // })
    return res.json({
        status: "fail",
        msg: "An id of product has existed!"
    })
})

app.put('/update', async (req, res) => {
    return res.json({
        status: "success",
        msg: "Created a new product"
    })
    // return res.json({
    //     status: "fail",
    //     msg: "An id of product has existed!"
    // })
})

app.delete('/delete/:id', async (req, res) => {
    return res.json({
        status: "fail",
        msg: 'Failed when trying delete this product!'
    })
})

app.listen(PORT, () => {
    console.log(`Server is starting at port ${PORT}!`);
})