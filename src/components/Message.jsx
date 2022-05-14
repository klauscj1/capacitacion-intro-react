export const MessageText = ({ message, name }) => {
  return (
    <div>
      <code>{message}</code>
      <br />
      <code>{name}</code>
    </div>
  );
};
