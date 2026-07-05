import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Me from './pages/Me';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/me" element={<Layout><Me /></Layout>} />
        <Route path="/post/:id" element={<Layout><PostDetail /></Layout>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
