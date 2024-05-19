import {NextRequest} from "next/server";
import {cookies} from "next/headers";

export async function GET(request: NextRequest){

    return new Response(
        "<h1>Route handler for get</h1>", {
            headers: {
                "Content-Type" : "text/html",
                "Set-Cookie": "theme=dark"
            }
        }
    );
}