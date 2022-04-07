import { useSelector } from 'react-redux';
import "./App.css";
import Likes from "./Likes";
import Title from "./Title";
import Comments from "./Comments";
import Spinner from "./Spinner";

function App() {
  const error = useSelector(state => state.appReducer.error);
  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        <div className="card">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
