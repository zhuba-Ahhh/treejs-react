import { Header } from 'components/Header';
import { Button } from 'components/Button';
import FaviconSVG from 'assets/favicon.svg';

import TreeJs from 'components/TreeJs';

function App() {
  return (
    <div className="App">
      {/* <Header title="Hello" />
      <img src={FaviconSVG} className="logo" alt="Vite logo" height={100} width={100} />
      <Button onClick={() => alert('Hello')}>Hello</Button> */}
      <TreeJs />
    </div>
  );
}

export default App;
