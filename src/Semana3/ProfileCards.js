import Avatar from "./Avatar.js";

function Card({ children }){
    return(
        <div className="card">
            {children}
        </div>
    );
}
export default function Profile(){
    return(
        <Card>
            <Avatar 
                size={100}
                person={{
                    name: 'Katsuko Sarushi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}