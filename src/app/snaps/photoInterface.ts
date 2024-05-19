import {StaticImageData} from "next/image";
import sittingRoom from '../../assets/photos/0d37a75e1a7656dada8f95c0a2bf1d19.jpeg';
import bedroom from '../../assets/photos/9d7a192630366bb51f5f5671b1761610.jpeg';
import macBook from '../../assets/photos/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg';
import cappuccino from '../../assets/photos/cappuccino_pic_2_portrait.png';
import macchiato1 from '../../assets/photos/macchiato_pic_2_portrait.png'
import macchiato2 from "../../assets/photos/macchiato_pic_3_portrait.png";


export type PhotoInterface = {
    id: string;
    name: string;
    src: StaticImageData;
    location: string;
};

export const photos: PhotoInterface[] = [
    {
        id: '1',
        name: 'Sitting room',
        src: sittingRoom,
        location: 'House'
    },
    {
        id: '2',
        name: 'Bed room',
        src: bedroom,
        location: 'House'
    },
    {
        id: '3',
        name: 'Mac Book pro',
        src: macBook,
        location: 'Technology'
    },
    {
        id: '4',
        name: 'cappuccino',
        src: cappuccino,
        location: 'Coffee'
    },
    {
        id: '5',
        name: 'Macchiato',
        src: macchiato1,
        location: 'Coffee'
    },
    {
        id: '6',
        name: 'Macchiato',
        src: macchiato2,
        location: 'Coffee'
    },
];




