import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';
import './App.css';

function App() {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    const handleFormSubmit = (input) => {
        setUserInput(input);
        setResult(`You entered: ${input}`);
    };

    return (
        <div className="app-container">
            <Header />
            <div className="content-container">
                <Form userInput={userInput} onFormSubmit={handleFormSubmit} />
                <Output result={userInput} />
            </div>
        </div>
    );
}

export default App;
