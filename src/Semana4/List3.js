import { useState } from 'react';
import './s4.css';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <div className="component-container">
      <h2 className="component-title">List3</h2>
      <h3>Inspiring sculptors:</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}