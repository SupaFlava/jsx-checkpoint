import "./App.css";
import doggy from "./doggy2.jpg";
import style from "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black ", maxWidth: "100vw" }}>
        <h1 className="title red">Rami Mhazres</h1>
        <br />
        <img
          src={doggy}
          style={{ width: "400px", height: "300px" }}
          alt="doggy"
        />
        <br />
        <img
          src="/dog.jpg"
          style={{ width: "400px", height: "300px" }}
          alt="cute dog"
        />
      </div>
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
