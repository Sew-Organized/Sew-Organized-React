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
                        <SideNav.Nav defaultSelected="Colors">

                            <NavItem eventKey="Colors">
                                <NavIcon><Link to="/colors"><i class="fas fa-th"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/colors">All Colors</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Stash">
                                <NavIcon><Link to="/stash"><i class="fas fa-bookmark"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/stash">My Stash</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="MyPalettes">
                                <NavIcon><Link to="/palettes"><i class="fas fa-swatchbook"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/palettes">My Palettes</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Palettes">
                                <NavIcon><Link to="/palettes"><i class="fas fa-palette"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/palettes">Palette Generator</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="About">
                                <NavIcon><Link to="/About"><i class="fas fa-users"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/About">About the Devs</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="LogOut">
                                <NavIcon><Link to="/splash"><i class="fas fa-sign-out-alt"></i></Link></NavIcon>
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
