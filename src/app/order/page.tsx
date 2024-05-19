'use client'

import React from 'react';


import {useRouter} from "next/navigation";

const Order = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push('/')
    }
    return (
        <>
            <h1>Order Page</h1>
            <button
                onClick={handleClick}
            >
                Place order
            </button>
        </>
    );
};

export default Order;