import './App.css';
import Feed from './components/Feed/Feed';
// import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      {/* <Header /> */}
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
    </div>
  );
}

export default App;
