import {comments} from "@/app/route-handlers/comments/data";
import {redirect} from "next/navigation";

export async function GET(
    _request: Request,
    {params}: {
        params: {
            id: string
        }
    }
){
    if(parseInt(params.id) > comments.length){
        redirect("/route-handlers/users/api")
    }
    const comment = comments.find(
        x => x.id === parseInt(params.id)
    );
    return Response.json(comment);
}


export async function PATCH(
    request: Request,
    {params} : {
        params: {
            id: string
        }
    }
){
    const {text} = await request.json();
    const index = comments.findIndex(
        x => x.id === parseInt(params.id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
}


export async function DELETE(
    request: Request,
    {params}: {
        params: {
            id: string
        }
    }
){
    const index = comments.findIndex(
        x => x.id === parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
}

