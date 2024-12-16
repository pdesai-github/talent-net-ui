import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './nav/NavBar';
import Job from './jobs/Job';
import Feed from './feeds/Feed';
import Image from './media/Image';
import Messaging from './messaging/Messaging';
import News from './news/News';
import Notifications from './notifications/Notification';
import Post from './posts/Post';
import UserProfile from './user/User-Profile';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/feeds" element={<Feed />} />
          <Route path="/media" element={<Image />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/news" element={<News />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
