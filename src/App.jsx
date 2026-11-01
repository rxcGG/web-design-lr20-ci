import { useState } from 'react';
export default function App() {
  const [done, setDone] = useState(false);
  return <main><h1>Перевірка збірки</h1><p>Результат тесту: {done ? 'виконано' : 'очікує'}</p><button onClick={() => setDone(!done)}>Змінити стан</button><p>Середовище: {import.meta.env.REACT_APP_ENV || 'local'}</p></main>;
}
