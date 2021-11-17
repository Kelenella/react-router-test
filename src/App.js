import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import './App.css';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/authors">
          <AuthorsView />
        </Route>
        <Route path="/books">
          <BooksView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
