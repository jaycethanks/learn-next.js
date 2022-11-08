import { useState } from 'react';
import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  const [ifShowModal, setifShowModal] = useState(false);
  const [todoItems, setTodoItems] = useState([
    { project: 'Learn React' },
    { project: 'Master React' },
    { project: 'Explore the full React Course' },
  ]);

  const [deleteTargetIndex, setDeleteTargetIndex] = useState(0);

  const deleteHandler = (index) => {
    setifShowModal(true);
    setDeleteTargetIndex(null);
    setDeleteTargetIndex(index);
  };
  const confirmHandler = () => {
    const copy = JSON.parse(JSON.stringify(todoItems));
    copy.splice(deleteTargetIndex, 1);
    setTodoItems(copy);
    setifShowModal(false);
  };
  const cancelHandler = () => {
    setifShowModal(false);
  };
  const backdropClickHandler = () => {
    console.log('[backdropClickHandler]: ', backdropClickHandler);
    setifShowModal(false);
  };

  return (
    <div>
      <h1>My Todos</h1>
      {todoItems.map((it, index) => (
        <Todo
          key={index}
          text={it.project}
          onDelete={() => deleteHandler(index)}
        />
      ))}

      {ifShowModal ? (
        <Modal onConfirm={confirmHandler} onCancel={cancelHandler} />
      ) : null}
      {ifShowModal ? <Backdrop onClick={backdropClickHandler} /> : null}
    </div>
  );
}

export default App;
