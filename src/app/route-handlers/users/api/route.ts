import {comments} from "@/app/route-handlers/comments/data";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? (
        comments.filter(
            x => x.text.includes(query)
        )
    ) : (comments);
    return Response.json(filteredComments)
}

export async function POST(request: Request){
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}


