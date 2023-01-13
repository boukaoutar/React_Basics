
import '../styles/Home.css';

function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
           Bonjour, {props.name}
        </p>
      </header>
    </div>
  );
}

export default Home;
