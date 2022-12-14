interface TodoListProps {
  items: string[];
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
