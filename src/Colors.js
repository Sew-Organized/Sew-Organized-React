import React, { Component } from 'react';
// import SearchBar from './SearchBar.js';
import List from './List.js';
// import Paging from './Paging.js';
import request from 'superagent';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Nav.css';
import { 
    Route, 
    BrowserRouter as Router, } from 'react-router-dom';
import Palettes from './Palettes.js';
import About from './About.js';
import Stash from './Stash.js';

export default class Colors extends Component {
    // state for the array of flosses to be posted to page
    state = {
        flosses: [],
        stashed: [],
    }

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        // put in api request link for rendering data
        const data = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors
        `).set('Authorization', user.token);
        console.log('data:', data);
        // double check data format that sets state
        const stashedData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/username/stash`).set('Authorization', user.token);
        
        this.setState({ 
            flosses: data.body, 
            stashed: stashedData.body })
    }
    //  can set state of more than one thing at a time and we need to call both all floss and favorite floss

    setStash = (flossObject) => {
        this.setState({ stashed: [...this.state.stashed, flossObject] })
        // check to see if already there, if not create a new one if so, add a new one
    }
    
    // setfavs function to be called into floss and pass as props so floss gets it


    render() {
        console.log('state:', this.state);
        return (
            <>
            <Router>
            <Route render={({ location, history }) => (
                <React.Fragment>
                    <SideNav className='sideNav'
                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="About">
                            <NavItem eventKey="About">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    About
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="dStash">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    My Stash
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/About" exact component={props => <About />} />
                        <Route path="/user/stash" component={props => <Stash />} />
                        <Route path="/palettes" component={props => <Palettes />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>  

            <div>
                {/* <SearchBar /> */}
                <List handleClick={this.setStash} flosses={this.state.flosses} />
                {/* <Paging /> */}
            </div>
            </>
        )
    }
}
