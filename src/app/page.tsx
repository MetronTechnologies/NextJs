import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <p><Link href="/profile">Go to profile</Link></p>
            <p><Link href="profile/hobbies">Go to hobbies</Link></p>
        </>
    )
}