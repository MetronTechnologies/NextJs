import React from 'react';
import Card from "@/components/card";
import Link from "next/link";

const Notifications = () => {
    return (
        <Card>
            <h1>Notifications</h1>
            <Link
                href={'/dashboard/archived'}
            >
                Archived Notifications
            </Link>
        </Card>
    );
};

export default Notifications;