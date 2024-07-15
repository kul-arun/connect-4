const PlayerName = ({ id, name, onChange }) => {
  const handleInputChange = (event) => {
    onChange(id, event.target.value);
  };

  return (
    <div className="m-3">
      <label htmlFor={id} className="mr-3 text-xl font-bold text-white">
        Player {id}:
      </label>
      <input
        type="text"
        id={id}
        value={name}
        onChange={handleInputChange}
        className="rounded-md px-2 py-1 text-xl text-black outline-none"
        placeholder="Name"
        size="35"
        required
      />
    </div>
  );
};

export default PlayerName;
