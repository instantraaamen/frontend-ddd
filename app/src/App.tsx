import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import UserList from './components/UserList';
import NotFound from './components/NotFound';
import PostList from './components/PostList';


const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/:id" element={<User />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="post-list" element={<PostList />} />
        <Route path="old-home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };

export default App
