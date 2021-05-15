import {DETAIL, LIST} from './shop.types';


export const viewDetail = productId => {
    return {
        type: DETAIL,
        payload: productId,
    };
};

export const viewList = () => {
    return {
        type: LIST,
    };
};