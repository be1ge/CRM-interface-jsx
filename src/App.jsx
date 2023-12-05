import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/Main/Main';
import Article from './components/Article/Article';
import Bet from './components/Bet/Bet';
import Client from './components/Client/Client';
import Instruction from './components/Instruction/Instruction';
import Project from './components/Project/Project';
import Shift from './components/Shift/Shift';
import Workers from './components/Workers/Workers'


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/client" component={Client} />
                    <Route path="/project" component={Project} />
                    <Route path="/bet" component={Bet} />
                    <Route path="/article" component={Article} />
                    <Route path="/instruction" component={Instruction} />
                    <Route path="/shift" component={Shift} />
                    <Route path="/workers" component={Workers} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
