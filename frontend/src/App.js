import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import UpdatePost from './pages/UpdatePost';
import Post from './pages/Post';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home />}/>
          <Route  path='/post/:id' element={<Post />}/>
          <Route path='/addpost' element={<AddPost />}/>
          <Route path='/updatepost' element={<UpdatePost />}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;



