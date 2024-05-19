import Link from "next/link";

export default function Hobbies() {
    return (
        <>
            <h1>My profile Hobbies</h1>
            <p><Link href="hobbies/cycling">Cycling</Link></p>
            <p><Link href="hobbies/gymnastics">Gymnastics</Link></p>
            <p><Link href="hobbies/reading">Reading</Link></p>
        </>

    )
}