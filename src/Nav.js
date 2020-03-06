import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Nav.css';
import { Link, withRouter } from 'react-router-dom';


export default withRouter( class Nav extends Component {

    logout = () => {
        localStorage.clear();
        this.props.history.push('/splash');
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <SideNav className='sideNav'>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="About">

                            <NavItem eventKey="About">
                                <NavIcon></NavIcon>
                                <NavText>
                                    <Link to="/About">About</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Colors">
                                <NavIcon></NavIcon>
                                <NavText>
                                    <Link to="/colors">All Colors</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Stash">
                                <NavIcon></NavIcon>
                                <NavText>
                                    <Link to="/user/stash">My Stash</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="MyPalettes">
                                <NavIcon></NavIcon>
                                <NavText>
                                    <Link to="/user/palettes">My Palettes</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Palettes">
                                <NavIcon></NavIcon>
                                <NavText>
                                    <Link to="/palettes">Palette Generator</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="LogOut">
                                <NavIcon></NavIcon>
                                <NavText>
                                    <div onClick={this.logout}>Log Out</div>
                                </NavText>
                            </NavItem>

                        </SideNav.Nav>
                    </SideNav>
                </React.Fragment>
            </div>
        )
    }
})
