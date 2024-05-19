import {NextRequest} from "next/server";
import {headers} from "next/headers";

export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const auth = requestHeaders.get("Authorization");
    const headersList = headers();
    const headerValues = {
        from_request_header: auth,
        from_next_header: headersList.get("Authorization")
    }
    return Response.json(headerValues);
}