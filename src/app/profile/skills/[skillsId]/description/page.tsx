export default function Description({params} : { params: { skillsId: string} }) {
    return (
        <h1>My skills id {params.skillsId} description</h1>
    )
}