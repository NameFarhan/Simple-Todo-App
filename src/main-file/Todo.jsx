import React, { useState } from 'react';
import InputPart from '../Components/InputPart';
import NewTodo from '../Components/NewTodo';
import '../Components/Styles.css'
const Todo = () => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleNewTodo = () => {
    setOpenDialogue(!openDialogue);
  };

  const handleCloseDialog = () => {
    setOpenDialogue(false);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setOpenDialogue(false); // Close the dialog after adding the todo
  };

  const handleDeleteTodo = (newtodo) => {
    setTodos(todos.filter(todo => todo !== newtodo));
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='Wrapper'>
        <div style={{ width: '750px', height: '100vh', position: 'relative' }} className='inner'>
          <p style={{ fontSize: '26px', fontWeight: '500', color: isDarkTheme ? '#fff' : '#000', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>TODO LIST</p>

          {/* Input part */}
          <InputPart onSearchChange={handleSearchChange} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

          <div style={{ position: 'relative', right: '32px', top: '0px' }}>
            {filteredTodos.map((todo, index) => (
              <div key={index} style={{ width: '525px', margin: '60px auto', height: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input style={{ width: '26px', height: '26px',border:'nonw' }} defaultChecked type='checkbox' />
                  <p style={{ fontSize: '20px', marginLeft: '17px', fontWeight: '500' }}>{todo}</p>
                  <button onClick={() => handleDeleteTodo(todo)} style={{
                    position: 'absolute', left: '70.1%', width: '110px', fontSize: '18px', fontWeight: '500',
                    height: '38px', cursor: 'pointer', border: '1px solid #6C63FF', color: '#6C63FF',
                    outline: 'none', borderRadius: '5px', background: '#fff'
                  }}>
                    Delete
                  </button>
                </div>
                <hr style={{ margin: '25px auto',border:'1px solid #6C63FF', maxWidth: '99.2%' }} />
              </div>
            ))}
          </div>

          <button className='add-todo-button' style={{
            border: 'none', cursor: 'pointer', outline: 'none', borderRadius: '100%', width: '50px',
            height: '50px', backgroundColor: '#6C63FF', position: 'absolute', bottom: '20px', right: '20px'
          }} onClick={handleNewTodo}>
            <i style={{ fontSize: '24px', color: '#fff' }} className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      {openDialogue && (
        <div className="dialog-overlay" onClick={handleCloseDialog} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div onClick={(e) => e.stopPropagation()}>
            <NewTodo addTodo={addTodo} closeDialog={handleCloseDialog} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
