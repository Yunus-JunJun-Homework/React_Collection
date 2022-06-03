import logo from './logo.svg';
import './App.css';
import CollectionComponent from './component/CollectionComponent';

function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
  ];

  return <CollectionComponent data={definitions} />;
}

export default App;
