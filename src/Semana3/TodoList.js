const today = new Date();
function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList(){
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img 
                className="avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Gregorio_Y._Zara_NAST.jpg"
                alt="Gregorio Y. Zara"
            /> 
            <ul>
                <li>Improve the videophonr</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}