// Decoder.js
import React, { useState } from 'react';
import '../styles/Decoder.css';

const utf8Encode = (str) => new TextEncoder().encode(str).buffer;
const utf8Decode = (buffer) => new TextDecoder().decode(buffer);

const Decoder = () => {
 const [text, setText] = useState('');
 const [encodedText, setEncodedText] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const handleProcess = () => {
 try {
 if (text.trim()) {
 const encoded = btoa(
 String.fromCharCode.apply(
 null,
 new Uint8Array(utf8Encode(text))
 )
 );
 setEncodedText(encoded);
 setText('');
 setErrorMessage('');
 } else if (encodedText.trim()) {
 const decodedBuffer = atob(encodedText);
 const uint8Array = new Uint8Array(
 Array.from(decodedBuffer).map(char => char.charCodeAt(0))
 );
 const decoded = utf8Decode(uint8Array.buffer);
 setText(decoded);
 setEncodedText('');
 setErrorMessage('');
 } else {
 setErrorMessage('Введите текст для обработки');
 }
 } catch (error) {
 setErrorMessage('Ошибка при обработке данных');
 }
 };

 return (
 <div className="decoder">
 <h2>Кодирование/Декодирование Base64</h2>
 
 {errorMessage && (
 <div className="error-message">
 {errorMessage}
 </div>
 )}
 
 <div className="input-container">
 <textarea
 value={text}
 onChange={(e) => setText(e.target.value)}
 placeholder="Введите текст для кодирования"
 rows={5}
 className="input-field"
 />
 
 <button 
 onClick={handleProcess} 
 className="process-button"
 >
 <span className="arrow up">&#8593;</span>
 <span className="arrow down">&#8595;</span>
 </button>
 
 <textarea
 value={encodedText}
 onChange={(e) => setEncodedText(e.target.value)}
 placeholder="Введите Base64 для декодирования"
 rows={5}
 className="input-field"
 />
 </div>
 </div>
 );
};

export default Decoder;
