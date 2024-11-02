import { Product, taxCalculation } from './06-funciont-destructuring';

const shoppingCart: Product[] =[
    {
        description:'Nokia',
        price:100,
    },
    {
        description:'Tablet',
        price:80
    }
];


//tax =0.15
const [ total , tax] = taxCalculation({
    tax:0.15,
    products:shoppingCart
});

console.log(`Total ${total} Tax ${tax} `)