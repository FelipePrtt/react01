import Avatar from "./Avatar.js";


function Card({ children }) {
    return (
        <div style={{
            width: "fit-content",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff"
        }}>
            {children}
        </div>
    );
}

export default function ProfileCards() {  
    return (
        <Card>
            Meu texto      
        </Card>
    );
}