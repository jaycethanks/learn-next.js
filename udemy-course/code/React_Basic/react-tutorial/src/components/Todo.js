export default function (props) {
  const { text } = props;
  return (
    <div>
      <li>todo:{text}</li>
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
}
