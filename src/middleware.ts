import {NextResponse, type NextRequest} from "next/server";

export function middleware(request: NextRequest) {


    // if(request.nextUrl.pathname === "/profile"){
    //     return NextResponse.redirect(new URL("/dashboard", request.url));
    // }


    // return NextResponse.redirect(new URL("/", request.url));

    const response = NextResponse.next();
}

// export const config = {
//     matcher: "/profile"
// }


