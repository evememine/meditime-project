import React from 'react'

const MediCartContext = React.createContext({
    items: [],
    totalAmount:0,
    addItem:(item) => {},
    removeItem:(id)=> {},
    removeAllItem:()=>{},
});

export default MediCartContext