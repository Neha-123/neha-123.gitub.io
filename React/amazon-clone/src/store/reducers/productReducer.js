import * as actionTypes from '../actions/actionTypes';

const InitialState = {
    product: [{
        id: '12344',
        productName: "Bourge Men's Loire-63 Running Shoes ",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/71A4FOEgLnL._UY695_.jpg',
        rating: '5',
        price: '723'
    },
    {
        id: '12384',
        productName: "Indian Polity - For Civil Services and Other State Examinations | 6th Edition Paperback – 27",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/51rKNmuSrsL._SX384_BO1,204,203,200_.jpg',
        rating: '3',
        price: '312'
    },
    {
        id: '19344',
        productName: "Samsung Galaxy Watch (Bluetooth, 46 mm) - Silver",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/71LHpHDcnEL._SL1500_.jpg',
        rating: '4',
        price: '19389'
    },
    {
        id: '12304',
        productName: "Godrej 190 L 3 Star Inverter Direct-Cool Single Door Refrigerator (RD 1903 PTI 33 DR WN, Denim Scarlet)",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/71QsP1cEoLL._SL1500_.jpg',
        rating: '4',
        price: '12389'
    },
    {
        id: '11344',
        productName: "Sony Bravia 80 cm (32 inches) HD Ready LED TV KLV-32R202G (Dark Brown)",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/71IgrNZUhPL._SL1500_.jpg',
        rating: '4',
        price: '15993'
    },
    {
        id: '12544',
        productName: "boAt Stone 150 Portable Wireless Speaker with 3W Immersive Audio, Bluetooth V5.0, Up to 6H Playback, Multiple Connectivity Modes and FM Mode (Active Black)",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/71JMY3kxrCL._SL1500_.jpg',
        rating: '5',
        price: '123'
    },
    {
        id: '12340',
        productName: "Bourge Men's Loire-63 Running Shoes",
        productImage: 'https://images-na.ssl-images-amazon.com/images/I/71A4FOEgLnL._UY695_.jpg',
        rating: '5',
        price: '123'
    }
    ],
    basket: []
}

const reducer = (state = InitialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_PRODUCT: return {
            ...state,
            basket: [...state.basket, action.basket]
        }
        
            break;
        case actionTypes.FETCH_PRODUCT: return {
            ...state,
            product: [...state.product, action.product]
        }
            break;
        default: return state;
    }
}

export default reducer;