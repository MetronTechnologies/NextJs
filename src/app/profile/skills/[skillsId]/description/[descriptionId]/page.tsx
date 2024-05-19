'use client'

import {notFound} from "next/navigation";

export default function DescriptionId(
    {params} : {
        params: {
            skillsId: string;
            descriptionId: string;
        }
    }
) {
    if(parseInt(params.descriptionId) > 1000 && parseInt(params.descriptionId) < 1999){
        notFound()
    }

    if(parseInt(params.descriptionId) > 2000){
        throw new Error("A message from loading id more than 2000")
    }
    return (
        <h1>My skills id {params.skillsId} description id {params.descriptionId}</h1>
    )
}