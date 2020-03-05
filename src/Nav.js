import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Nav.css';
import { 
    Route, 
    BrowserRouter as Router, } from 'react-router-dom';
import Palettes from './Palettes.js';
import About from './About.js';
import Stash from './Stash.js';
import SavedPalettes from './SavedPalettes.js';

export default class Nav extends Component {
    render() {
        return (
            <div>
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

                            <NavItem eventKey="Stash">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    My Stash
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="MyPalettes">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    My Palettes
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="palettes">
                                <NavIcon>
                                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText>
                                    Palette Generator
                                </NavText>
                            </NavItem>

                        </SideNav.Nav>
                    </SideNav>
                    <main>
                        <Route path="/About" exact component={props => <About />} />
                        <Route path="/user/stash" component={props => <Stash />} />
                        <Route path="/user/palettes" component={props => <SavedPalettes />} />
                        <Route path="/palettes" component={props => <Palettes />} />
                    </main>
                </React.Fragment>
            )}
            />
        </Router>  
            </div>
        )
    }
}
