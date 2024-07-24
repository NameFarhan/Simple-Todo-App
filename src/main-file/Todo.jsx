import React from 'react';
import InputPart from '../Components/InputPart';
import NewTodo from '../Components/NewTodo';

const Todo = () => {

    const handleNewTodo = () => {
        
    }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='Wrapper'>
        <div style={{ border: '1px solid black', width: '750px', height: '710px', position: 'relative' }} className='inner'>
          <p style={{ fontSize: '26px', fontWeight: '500', color: '#252525', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>TODO LIST</p>

          {/* input part */}
          <InputPart />

          <button className='add-todo-button' style={{
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            borderRadius: '100%',
            width: '50px',
            height: '50px',
            backgroundColor: '#6C63FF',
            position: 'absolute',
            bottom: '20px',
            right: '20px'
          }}
          onClick={handleNewTodo}
          >
            <i style={{ fontSize: '24px', color: '#fff' }} className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
