export default function (props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: '#00000045',
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    ></div>
  );
}
