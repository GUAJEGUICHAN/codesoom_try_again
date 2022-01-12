import {
  Link,
  Route, Routes,
} from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import LoginPage from './LoginPage';

export default function App() {
  return (
    <>
      <header>
        <h1><Link to="/">헤더영역</Link></h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>

  );
}
