import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage'
import About from './component/About'
import Contact from './component/Contact'
import NewsDetail from './component/NewsDetail'
import Event from './component/Event'
import News from './component/News'
import EventDetail from './component/EventDetail'
import Media from './component/Media'
import NavigationBar from './common/NavigationBar'
import Footer from './common/Footer'
function App() {
  return (
    <>
      <NavigationBar />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>

      <Route path='/' exact component={LandingPage} />
      <Route path='/about'  component={About} />
      <Route path='/contact'  component={Contact} />
      <Route path='/event' exact component={Event} />
      <Route path='/media' exact component={Media} />
      <Route path='/event/:event_id'  component={EventDetail} />
      <Route path='/news' exact component={News} />
      <Route path='/news/:news_id'  component={NewsDetail} />
      </Switch>

    </Router>
    <Footer />
    </>

  );
}

export default App;
