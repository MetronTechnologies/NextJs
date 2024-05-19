import React from 'react';
import {PhotoInterface, photos} from "@/app/snaps/photoInterface";
import Image, {StaticImageData} from "next/image";

const SnapPage = (
    {params: {id}}: {
        params: {id: string}
    }
) => {
    const photo: PhotoInterface | undefined = photos.find(
        p => p.id === id
    );
    return (
        <div className={'container mx-auto my-10'}>
            <div className={'w-1/2 mx-auto'}>
                <div>
                    <h1 className={'text-center text-3xl font-bold my-4'}>
                        {photo?.name}
                    </h1>
                </div>
                <Image
                    src={photo?.src as StaticImageData}
                    alt={photo?.name as string}
                    className={'w-full object-cover aspect-square'}
                />
                <div className="bg-white py-4">
                    <h3>{photo?.location}</h3>
                </div>
            </div>
        </div>
    );
};

export default SnapPage;