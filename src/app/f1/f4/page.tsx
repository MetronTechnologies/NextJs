import React from 'react';
import Card from "@/components/card";
import Link from "next/link";

const f4 = () => {
    return (
        <Card>
            <h1>F4 Page</h1>
            <Link href={'/f1/f3'}>
                Go to f3
            </Link>
        </Card>
    );
};

export default f4;