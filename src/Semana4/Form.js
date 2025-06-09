import { useState } from 'react';
import './s4.css';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(to, message);
    setIsSending(false);
  }

  return (
    <form class="body component-container" onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" disabled={isSending}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}

async function sendMessage(to, message) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  alert(`You said "${message}" to ${to}`);
}