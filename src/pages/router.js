import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import ExplorePage from './Explore';
import ActivityPage from './Activity';
import ProfilePage from './Profile';
import NotFoundPage from './NotFound';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
