import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Layout from './components/Layout';
import Home from './pages/Home';
import AddPost from './pages/AddPosts';
import EditPost from './pages/EditPosts';
import PostPage from './pages/PostPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="" component={Home} />
          <Route exact path="/posts/add" component={AddPost} />
          <Route exact path="/posts/edit/:postId" component={EditPost} />
          <Route exact path="/posts/:postId" component={PostPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
