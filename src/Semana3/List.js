import { people } from "./data";
import { getImageUrl } from "./utilsList";
import './List.css'; 

export default function List() {
    const listItems = people.map(person =>
        <li key={person.id} className="list-item">
            <img 
                src={getImageUrl(person)}
                alt={person.name}
                className="circle-image"
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul className="list-container">{listItems}</ul>;
}