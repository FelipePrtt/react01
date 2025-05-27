function Avatar({person, size}){
    return(
        <img 
            className="avatar"
            src="https://upload.wikimedia.org/wikipedia/en/c/cd/Lin_Lanying.jpeg"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}

export default function Profile(){
    return(
        <Avatar 
            person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            size={100}
        />
    );
}