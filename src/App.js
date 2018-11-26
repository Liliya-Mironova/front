import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Chat from '../src/components/Chat/Chat.js';
import ChatsList from '../src/components/ChatsList/ChatsList.js';
import Header from '../src/components/Header/Header.js';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="ChatsWrap">
                        <Route exact path="/" component={ChatsList} />
                        <Route path="/chat1" component={Chat} />
                        <Route path="/chat2" component={Chat} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;