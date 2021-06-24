import './style/App.css';
import {Switch, Route, Link} from 'react-router-dom';
import DisplayAllItems from './components/DisplayAllItems';
import AddItem from './components/AddItem';
import Login from './components/Login';


function App() {

  

  return (
    <div className="App">
      Hello!

    <nav>
      {/* <Link to='/'>Home</Link> */}
      <Link to='/all-posts'>All Posts</Link>
      <Link to='/add-post'>Add Post</Link>
      <Link to='/login'>Register</Link>
    </nav>

      <Switch>
        {/* <Route exact path="/" render={(props) => <Home {...pros} /> } /> */}
        <Route exact path="/all-posts" render={(props) => <DisplayAllItems {...props} /> } />
        <Route exact path="/add-post" render={(props) => <AddItem {...props} /> } />
        <Route exact path="/login" render={(props) => <Login {...props} /> } />
      </Switch>

      
    </div>



  );
}

export default App;
