import pizzaImg from '../images/pizza.png';
import buggerImg from '../images/burger.png';
import cocaImg from '../images/coca.png';
import saladImg from '../images/salad.png';
import waterImg from '../images/water.png';
import iceCreamImg from '../images/icecream.png';
import kebabImg from '../images/kebab.png';

export function getData() {
    return [
        {title: "Pizza", price: 17.99, image: pizzaImg, id: 1},
        {title: "Burger", price: 15, image: buggerImg, id: 2},
        {title: "Coca-cola", price: 3.5, image: cocaImg, id: 3},
        {title: "Salad", price: 2.5, image: saladImg, id: 4},
        {title: "Bottle of water", price: 0.99, image: waterImg, id: 5},
        {title: "Ice-cream", price: 2.99, image: iceCreamImg, id: 6},
        {title: "Kebab", price: 13.99, image: kebabImg, id: 7},
    ]
}
