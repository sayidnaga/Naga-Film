
import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import Ghibli from "./components/Ghibli.js"
import Makoto from "./components/Makoto.js"

import './style/landingPage.css'

function App() {
  return (
   <div>
     {/*intro section */}
        <div className="myBG">
          <NavigationBar />
          <Intro />
        </div>
        {/*end of intro*/}

        {/*trending section*/}
        <div className="ghibli">
          <Ghibli/>
        </div>

        <div className='makoto'>
          <Makoto/>
        </div>

   </div>
  );
}

export default App;
