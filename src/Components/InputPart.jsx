import React, { useState } from 'react';
import '../Components/Styles.css'
const InputPart = ({ onSearchChange, toggleTheme, isDarkTheme }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', margin: 'auto', width: '595px', marginTop: '20px' }}>
      <input
        style={{
          width: '100%', height: '38px', paddingLeft: '16px', boxSizing: 'border-box',
          border: '1px solid #6C63FF', borderRadius: '5px', color: '#9C9ABD', outline: 'none', fontSize: '16px'
        }}
        placeholder='Search note...'
        value={value}
        onChange={handleChange}
      />
      <button
        style={{
          position: 'absolute', right: '36px', top: '0', height: '38px', width: '40px', boxSizing: 'border-box',
          background: 'transparent', border: 'none', color: '#6C63FF',
        }}
      >
        <i style={{ fontSize: '22px', cursor: 'pointer', opacity: '0.8' }} className="fa-solid fa-magnifying-glass"></i>
      </button>

      <button
        onClick={toggleTheme}
        style={{ position: 'relative', border: 'none', outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '5px', backgroundColor: '#6C63FF', left: '20px' }}
      >
        <i style={{ fontSize: '22px', cursor: 'pointer', color: '#fff', transform: 'rotate(-20deg)' }} className={isDarkTheme ? 'fa-regular fa-sun' : 'fa-regular fa-moon'}></i>
      </button>
    </div>
  );
};

export default InputPart;
