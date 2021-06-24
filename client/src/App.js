import './style/App.css';
import {Switch, Route, Link} from react-router-dom;

function App() {

  const [post, setPost]=useState('')
  const handleSubmit =(event)=>{
    //send it to the server
    event.preventDefault()
    axios
      .post('http//localhost:5000', {post})
      .then(console.log)
      .catch(console.error)
  }

  const handleChange=(event)=>{
    //on typing set post
    setPost(event.target.value)

  }

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

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="post" placeholder="Make a post ..." />
        <button>Post it</button>
      </form>
    </div>



  );
}

export default App;
