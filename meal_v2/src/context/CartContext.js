import React, {useContext, useReducer} from 'react';
import {fetchInListing} from "../fixtures/MealFixtures";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    nbItems: 0,
    addItem: () => {},
    removeItem: () => {},
});

const defaultCartState = {
    items: [],
    amount: 0,
};

const cartReducer = (cartState, cartAction) => {
    if (cartAction.type === 'ADD') {
        const item = fetchInListing(cartAction.item);

        if (!item) {
            return;
        }

        item.amount = item.amount + cartAction.item.amount;

        const existingItemIndex = cartState.items.findIndex((item) => {
            return item.id === cartAction.item.id;
        })

        let items = [];

        if (existingItemIndex < 0) {
            items = cartState.items.concat(cartAction.item);
        } else {
            cartState.items[existingItemIndex].amount += +cartAction.item.amount;
            items = cartState.items;
        }

        const amount = +cartState.amount + (item.price * +cartAction.item.amount);

        return {
            items: items,
            amount: amount,
        }
    }

    if (cartAction.type === 'REMOVE') {
        const existingItemIndex = cartState.items.findIndex((item) => {
            return item.id === cartAction.item.id;
        })

        if (existingItemIndex === -1) {
            return;
        }

        const item = fetchInListing(cartAction.item);

        const amount = +cartState.amount - +item.price;

        if (cartState.items[existingItemIndex].amount === 1) {
            cartState.items.splice(existingItemIndex, 1);
        } else {
            cartState.items[existingItemIndex].amount -= 1;
        }

        return {
            items: cartState.items,
            amount: amount
        }
    }

    return defaultCartState;
};

export const CartContextProvider = (props) => {
    const [cartState, cartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        cartAction({
            type: 'ADD',
            item: item,
        })
    };

    const removeItemHandler = (item) => {
        cartAction({
            type: 'REMOVE',
            item: item,
        })
    };

    const nbItems = cartState.items.reduce((currentNb, item) => {
        return +currentNb + +item.amount;
    }, 0);

    console.log(cartState.items);

    return (
        <CartContext.Provider value={
            {
                totalAmount: cartState.amount,
                items: cartState.items,
                nbItems: nbItems,
                addItem: addItemHandler,
                removeItem: removeItemHandler,
            }
        }>
            { props.children }
        </CartContext.Provider>
    )
}

export default CartContext;