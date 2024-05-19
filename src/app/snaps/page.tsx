import {photos} from "@/app/snaps/photoInterface";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import "./styles.css";

const PhotoFeed = () => {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                Album
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    photos.map(
                        ({id, src, name}) => (
                            <Link key={id} href={`/snaps/${id}`}>
                                <Image
                                    src={src}
                                    alt={name}
                                    className={'w-full object-cover aspect-square'}
                                />
                            </Link>
                        )
                    )
                }
            </div>
        </main>
    );
};

export default PhotoFeed;