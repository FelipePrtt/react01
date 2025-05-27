export function Profile(){
 return(
    <img
        src="https://upload.wikimedia.org/wikipedia/pt/b/b0/Alan_L_Hart.jpg"
        alt="Alan L. Hart"
    />
 );
}

export default function Galeria(){
    return(
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}