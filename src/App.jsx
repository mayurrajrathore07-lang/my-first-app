import './App.css';

function Header() {
  return <header><h1>My Website</h1></header>;
}

function Center() {
  return <div className="center-box"><h2>hy</h2></div>;
}

function App() {
  return (
    <div>
      <Header />
      <Center />
      <h1>Hello, World!</h1>
      <p>Welcome to my first React app.</p>
    </div>
  );
}

export default App;

