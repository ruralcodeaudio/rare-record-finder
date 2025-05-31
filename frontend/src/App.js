import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const res = await fetch('https://rare-record-backend.onrender.com/api/search?q=' + encodeURIComponent(query));
    const data = await res.json();
    setResults(data.results);
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Rare Record Finder</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for vinyl, CD, or cassette"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      <ul>
        {results.map((item, i) => (
          <li key={i}>
            <strong>{item.title}</strong> - {item.format} ({item.condition}) — {item.price} — 
            <a href={item.link} target="_blank" rel="noreferrer">View</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
