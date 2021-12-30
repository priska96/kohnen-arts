import {DETAIL, LIST} from './gallery.types';


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