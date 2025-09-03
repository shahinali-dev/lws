const domContainer = document.querySelector("#root");

function Fruits() {
  const [fruits, setFruits] = React.useState(["Apple", "Banana", "Orange"]);
  const [fruit, setFruit] = React.useState("");

  const handleOnChange = (event) => {
    setFruit(event.target.value);
  };
  const handleOnClick = () => {
    setFruits([...fruits, fruit]);
    setFruit("");
  };
  return (
    <div className="container">
      <ul id="fruits">
        {fruits.sort().map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <br />
      <p>
        <input type="text" value={fruit} onChange={handleOnChange} />
      </p>
      <button onClick={handleOnClick}>Add Fruit</button>
    </div>
  );
}

ReactDOM.render(<Fruits />, domContainer);
