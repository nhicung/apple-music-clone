import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import theme from './containers/modules/theme';
import About from './pages/About';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './views/common/NavBar';
import Footer from './views/common/Footer';

export const Routes = () => {
    return (
        <Router basename='/browse'>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/home' render={() => <Redirect to='/' />} />
            <Route path='/projects' render={() => <Projects />} />
            <Route path='/experience' render={() => <Experience />} />
            <Route path='/about' render={() => <About />} />
            <Footer />
        </Router>
    );
};

export default Routes;
