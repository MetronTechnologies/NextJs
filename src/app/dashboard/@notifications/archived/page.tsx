import React from 'react';
import Card from "@/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
    return (
        <Card>
            <h1>Archived Notifications</h1>
            <Link href={'/dashboard'}>
                Notifications
            </Link>
        </Card>
    );
};

export default ArchivedNotifications;