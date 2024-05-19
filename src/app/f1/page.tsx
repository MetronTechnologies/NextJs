import React from 'react';
import Card from "@/components/card";
import Link from "next/link";

const f1 = () => {
    return (
        <Card>
            <h1>F1 Page</h1>
            <Link href={'/f1/f2'}>F2</Link>
        </Card>
    );
};

export default f1;