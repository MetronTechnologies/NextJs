import React from 'react';
import Card from "@/components/card";
import Link from "next/link";

const Intercepted = () => {
    return (
        <Card>
            <h1>Intercepted Page</h1>
            <Link href={'/f1/f2'}>F2</Link>
        </Card>
    );
};

export default Intercepted;