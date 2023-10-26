import React, {useEffect, useState} from 'react';

const OrderService = React.createContext({
    orderList: [],
    onAddItem: () => {},
    nb: 0,
});

export const OrderServiceProvider = (props) => {
    const [orderList, setOrderList] = useState([]);
    const [nbItemInList, setNbItemInList] = useState(0);

    const onAddItemHandler = (item) => {
        setOrderList((prevState) => {
            return [...prevState, item]
        })
    }

    useEffect(() => {
        let count = 0;
        orderList.map((item) => {
             count = +count + +item.amount;
        })

        setNbItemInList(count);
    }, [orderList]);

    return (
        <OrderService.Provider value={
            {
                orderList: orderList,
                onAddItem: onAddItemHandler,
                nb: nbItemInList,
            }
        }>
            { props.children }
        </OrderService.Provider>
    );
}

export default OrderService;

