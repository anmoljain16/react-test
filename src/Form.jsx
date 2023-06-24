import React, { useState } from 'react';

function Form({ userInput, onFormSubmit }) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setError('Please write something on input.');
        } else {
            setError('');
            onFormSubmit(inputValue);
            setInputValue('');
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default Form;
