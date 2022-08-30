import './App.css';
import NameBox from '../NameBox';
import ProjectDisplay from '../ProjectDisplay';
import AboutMe from '../AboutMe';

function App() {
  return (
    <div className="App">
      <NameBox />
      {/* <div>this is where the text goes</div> */}
      <ProjectDisplay />
      <AboutMe />
    </div>
  );
}

export default App;
