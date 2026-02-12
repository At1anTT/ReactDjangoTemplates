// src/components/TestPost.tsx
import { useState } from 'react';
import axios from 'axios';

export function TestPost() {
  const [greeting, setGreeting] = useState<string>('');

  const handlePostRequest = async () => {
    try {
      // Отправляем POST-запрос на наш эндпоинт
      const response = await axios.post('http://127.0.0.1');
      
      // Сохраняем сообщение из ответа в стейт
      setGreeting(response.data.message);
    } catch (error) {
      console.error('Ошибка при запросе:', error);
      setGreeting('Ошибка соединения с сервером');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button onClick={handlePostRequest}>
        Отправить POST запрос
      </button>
      
      {greeting && (
        <h2 style={{ marginTop: '20px', color: 'green' }}>
          {greeting}
        </h2>
      )}
    </div>
  );
}
