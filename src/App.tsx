import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiagnosisMenu from './pages/diagnosis_menu';
import Home from './pages/Home';
import MyPage from './pages/mypage';
import YouMiru from './pages/YouMiru';
import AllMiru from './pages/AllMiru';
import IMiru from './pages/IMiru';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/diagnosis_menu" element={<DiagnosisMenu />} />
        <Route path="/imiru" element={<IMiru />} />
        <Route path="/youmiru" element={<YouMiru />} />
        <Route path="/allmiru" element={<AllMiru />} />
      </Routes>
    </Router>
  );
}

// function App() {

//   return (
//     <>
//       <PageTitle text={"テスト"}/>
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

export default App
