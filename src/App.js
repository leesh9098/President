import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Result from "./pages/Result";

function App() {
  const [name, setName] = useState("");
  const [chosungSum, setChosungSum] = useState(0);
  const [sequenceSum, setSequenceSum] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setName={setName} setChosungSum={setChosungSum} setSequenceSum={setSequenceSum} setTotal={setTotal} />} />
        <Route path="/loading" element={<Loading name={name} total={total} />} />
        <Route path="/result/:param" element={<Result name={name} chosungSum={chosungSum} sequenceSum={sequenceSum} setTotal={setTotal} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
