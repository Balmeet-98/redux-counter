import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./Redux/Actions";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-outline lg"
          onClick={() => dispatch(decNum())}
        >
          -
        </button>
        <h1>State:{myState}</h1>
        <button
          type="button"
          className="btn btn-outline lg"
          onClick={() => dispatch(incNum())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
