import "./App.css";
import BootExample from "./component/BootExample";
import FirstComp from "./component/FirstComp";
import Second from "./component/Second";
import Copyright from "./component/Copyright";
import Third from "./component/Third";
import Fourth from "./component/Fourth";
import Example from "./component/Example";
import Card from "./component/Card";
import Fifth from "./component/Fifth";
import Counter from "./component/Counter";
import ClassEffectCont from "./component/ClassEffectCont";
import Timer from "./component/Timer";
import ClassCondtn from "./component/ClassCondtn";
import Hook1 from "./component/Hook1";
import Hook2 from "./component/Hook2";
import MapCard1 from "./component/MapCard1";
import Display from "./component/Display";
import PractMap1 from "./component/PractMap1";
import Carsel from "./component/Carsel";
import AddUppBtnn from "./component/AddUppBtnn";
import HookApi from "./component/HookApi";
import RandNumb from "./component/RandNumb";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BootExample/>
      <Carsel/>
      <FirstComp />
      <Second />
      <Copyright />
      <Third />
      <Fourth />
      <Example />
      <Card
        imagess="../../images/mum2.png"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestias labore ad magnam doloribus maiores. Iusto, quasi placeat aperiam molestiae ut reprehenderit necessitatibus tempora nulla corrupti quia sed adipisci doloremque animi, veritatis fuga autem, voluptatum rerum. Voluptatem repellendus doloremque autem."
        btn="subscribeNow"
      />
      <Fifth />
      <Counter />
      {/* <ClassEffectCont /> */}
      <Timer />
      <ClassCondtn />
      <Hook1 />
      <Hook2 />
      <MapCard1 />
      <Display/>
      <PractMap1/>
      <AddUppBtnn/>
      <HookApi/>
      <RandNumb/>
    </div>
  );
}

export default App;
