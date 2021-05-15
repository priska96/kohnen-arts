import top1 from '../../images/top1.png';
import top2 from '../../images/top2.png';
import top3 from '../../images/top3.png';
import top4 from '../../images/top4.png';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: 'top',
            price: 5.00,
            text: 'Nice! NICE!',
            img: top1,
        }, {
            id: 2,
            title: 'hemd',
            price: 15.00,
            text: 'Nice! NICE!',
            img: top2,
        },
        {
            id: 3,
            title: 'top',
            price: 4.00,
            text: 'Nice! NICE!',
            img: top3,
        }, {
            id: 4,
            title: 'hemd',
            price: 8.00,
            text: 'Nice! NICE!',
            img: top4,
        },
        {
            id: 5,
            title: 'top',
            price: 5.90,
            text: 'Nice! NICE!',
            img: top1,
        }, {
            id: 6,
            title: 'hemd',
            price: 5.00,
            text: 'Nice! NICE!',
            img: top2,
        },
        {
            id: 7,
            title: 'hemd',
            price: 5.00,
            text: 'Nice! NICE!',
            img: top3,
        }, {
            id: 8,
            title: 'hemd',
            price: 5.00,
            text: 'Nice! NICE!',
            img: top4,
        }
    ],
    productId: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DETAIL':
            return {
                ...state, productId: action.payload
            }
        case 'LIST':
            return {
                ...state, productId: undefined
            }
        default:
            return state;
    }
};

export default reducer;