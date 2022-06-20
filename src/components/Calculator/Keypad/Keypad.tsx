const Keypad: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      {actions.map((action: Action, key) => (
        <Button {...action} key={key} />
      ))}
    </div>
  );
};

export default Keypad;