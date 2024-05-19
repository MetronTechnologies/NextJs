import React from 'react';
import {PhotoInterface, photos} from "@/app/snaps/photoInterface";
import Modal from "@/components/modal";
import Image, {StaticImageData} from "next/image";

const SnapModal = (
    {params: {id}}: {
        params: {id: string}
    }
) => {
    const photo: PhotoInterface | undefined = photos.find(
        p => p.id === id
    );
    return (
        <Modal>
            <Image
                src={photo?.src as StaticImageData}
                alt={photo?.name as string}
                className={'w-full object-cover aspect-square'}
            />
            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">
                    {photo?.name}
                </h2>
                <h3>{photo?.location}</h3>
            </div>
        </Modal>
    );
};

export default SnapModal;