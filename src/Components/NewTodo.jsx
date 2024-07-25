import React, { useState } from 'react';

const NewTodo = ({ addTodo, closeDialog }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApply = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
    }
  };

  return (
    <div style={{
      width: '500px',
      height: '289px',
      padding: '18px 30px',
      backgroundColor: 'white',
      borderRadius:'16px'
    }}>
      <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '500', fontSize: '24px' }}>NEW NOTE</p>

      {/* Input */}
      <input
        style={{
          width: '100%',
          height: '38px',
          paddingLeft: '16px',
          boxSizing: 'border-box',
          border: '1px solid #6C63FF',
          borderRadius: '5px',
          color: '#9C9ABD',
          outline: 'none',
          fontSize: '16px',
          marginTop: '25px'
        }}
        placeholder='Input your note...'
        value={inputValue}
        onChange={handleInputChange}
      />

      <div style={{ display: 'flex', marginTop: '84px', justifyContent: 'space-between' }}>
        <button onClick={closeDialog} style={{
          width: '110px',
          fontSize: '18px',
          fontWeight: '500',
          height: '38px',
          cursor: 'pointer',
          border: '1px solid #6C63FF',
          color: '#6C63FF',
          outline: 'none',
          borderRadius: '5px',
          background: '#fff'
        }}>CANCEL</button>
        <button onClick={handleApply} style={{
          width: '97px',
          height: '38px',
          cursor: 'pointer',
          fontSize: '18px',
          fontWeight: '500',
          color: '#fff',
          outline: 'none',
          background: '#6C63FF',
          borderRadius: '5px',
          border: 'none'
        }}>APPLY</button>
      </div>
    </div>
  );
}

export default NewTodo;
