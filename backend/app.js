const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const foodData = [
    {
        dishType: 'Veg',
        dishName: 'Panner Tikka',
        dishPrice: 'INR 200'
    },
    {
        dishType: 'Veg',
        dishName: 'Panner Tikka Masala',
        dishPrice: 'INR 220'
    },
    {
        dishType: 'Non-veg',
        dishName: 'Chicken Curry',
        dishPrice: 'INR 300'
    },
    {
        dishType: 'Veg',
        dishName: 'Panner Bhurji',
        dishPrice: 'INR 180'
    }

]
const drinkData = [
    {
        dType: 'Mocktail',
        dName: 'Virgin Mojito',
        dPrice: 'INR 100'
    },
    {
        dType: 'Mocktail',
        dName: 'Lemonade',
        dPrice: 'INR 80'
    },
    {
        dType: 'Cocktail',
        dName: 'LIIT',
        dPrice: 'INR 150'
    }
]


app.get('/data', function (req, res) {
    let data = [foodData, drinkData];
    res.json(data);
});

app.listen(3002, function () { console.log('server started at 3002'); });
