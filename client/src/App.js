import './style/App.css';
import {Switch, Route, Link} from react-router-dom;

function App() {

  

  return (
    <div className="App">
      Hello!

    <nav>
      <Link to='/'>Home</Link>
      <Link to='/all-posts'>All Posts</Link>
      <Link to='/add-post'>Add Post</Link>
    </nav>

      <Switch>
        <Route exact path="/" render={(props) => <Home {...pros} /> } />
        <Route exact path="/all-posts" render={(props) => <Home {...pros} /> } />
        <Route exact path="/add-post" render={(props) => <Home {...pros} /> } />
      </Switch>

      
    </div>



  );
}

export default App;
