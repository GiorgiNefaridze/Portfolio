import Nav from './components/Nav';

import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import './styles/App.scss'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
    return (
        <div className='app-container'>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={< Home />}/>
                    <Route path="/about" element={< About />}/>
                    <Route path="/projects" element={< Projects />}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}