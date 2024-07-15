const PlayerColor = ({ id, color, onChange }) => {
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    onChange(id, selectedColor);
    const otherColor = selectedColor === "Red" ? "Yellow" : "Red";
    id === 1 ? onChange(2, otherColor) : onChange(1, otherColor);
  };

  const getColor = () => {
    switch (color) {
      case "Red":
        return "bg-myRed text-white";
      case "Yellow":
        return "bg-myYellow text-black";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="my-3">
      <label htmlFor={id} className="mr-3 text-xl font-bold text-white">
        Player {id}:
      </label>
      <select
        id={id}
        value={color}
        onChange={handleColorChange}
        className={`cursor-pointer px-2 py-1 text-center ${getColor()} rounded-md text-xl outline-none`}
      >
        <option value="" className="hidden"></option>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
      </select>
    </div>
  );
};

export default PlayerColor;
