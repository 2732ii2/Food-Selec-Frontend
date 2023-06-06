import './App.css';
import { Routes,Route } from 'react-router-dom';
import Main_page from './Components/Main_page';
import SendD from './Components/Send_data/SendD';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main_page />} />
        <Route path="/admin" element={<SendD />} />
      </Routes>
    </div>
  );
}

export default App;
