import CollectionComponent from './components/CollectionComponent';
import CollectionFunc from "./components/CollectionFunc";

function App() {
  const definitions = [
    {dt: 'one', dd: 'two', id: 1},
    {dt: 'another term', dd: 'another description', id: 2},
  ];

  return (
    <>
      <CollectionComponent data={definitions}/>
      <hr/>
      <CollectionFunc data={definitions}/>
    </>
  )
}

export default App;
