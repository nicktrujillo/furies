import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import ProfileForm from "../profile-forms/ProfileForm";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import PrivateRoute from "../routing/PrivateRoute";
import Homepage from "../services/Homepage";
import Youtube from "../services/Youtube";
import Notifications from "../notifications/Notifications";
import ChatPage from "../chatpage/ChatPage";
import ChatHome from "../chatpage/ChatHome";
import Charts from "../charts/Charts";

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/services' component={Homepage} />
        <Route exact path='/youtube' component={Youtube} />
        <Route exact path='/charts' component={Charts} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={ProfileForm} />
        <PrivateRoute exact path='/edit-profile' component={ProfileForm} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <PrivateRoute
          exact
          path='/notifications/:id'
          component={Notifications}
        />
        <PrivateRoute exact path='/messages' component={ChatHome} />
        <PrivateRoute exact path='/messages/:id' component={ChatPage} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
