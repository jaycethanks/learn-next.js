export default function (props) {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        zIndex: 999,
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px',
        height: '100px',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <h2>Confirm Delete?</h2>
      <button onClick={props.onCancel}>cancel</button>
      <button onClick={props.onConfirm}>confirm</button>
    </div>
  );
}
