import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserList from './components/UserList';
import NotFound from './components/NotFound';
import PostList from './components/PostList';
import Cbutton from './components/catalog/CButton';
import { Cspinner } from './components/catalog/Cspinner';
import { Cnavbar } from './components/catalog/CNavbar';
import { Cdropdown } from './components/catalog/Cdropdown';


const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/:id" element={<User />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="post-list" element={<PostList />} />
        <Route path="old-home" element={<Navigate to="/" replace />} />
        <Route path="component/button" element={<Cbutton />} />
        <Route path="component/spinner" element={<Cspinner />} />
        <Route path="component/navbar" element={<Cnavbar />} />
        <Route path="component/dropdown" element={<Cdropdown />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };

export default App
