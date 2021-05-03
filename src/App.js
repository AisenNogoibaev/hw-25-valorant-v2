import './App.css';
import { Nav } from './components/Nav'
import { Block } from './components/Block'
import { Block2 } from './components/Block2'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Block/>
      <Block2/>
    </div>
  );
}

export { App };
