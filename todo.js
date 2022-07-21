function Todo({ todo, index, remove }) {
  function handle() {
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
      <div>{todo.text}</div>
      <div className="remove">-</div>
    </div>
  );
}
