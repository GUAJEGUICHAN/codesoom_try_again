import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  // console.log(window.location.pathname)
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );
}
