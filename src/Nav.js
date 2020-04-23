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
                                <NavIcon><Link to="/colors"><i className="fas fa-th"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/colors">All Colors</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Stash">
                                <NavIcon><Link to="/stash"><i className="fas fa-bookmark"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/stash">My Stash</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="MyPalettes">
                                <NavIcon><Link to="/mypalettes"><i className="fas fa-swatchbook"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/mypalettes">My Palettes</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="Palettes">
                                <NavIcon><Link to="/palettes"><i className="fas fa-palette"></i></Link></NavIcon>
                                <NavText>
                                    <Link to="/palettes">Palette Generator</Link>
                                </NavText>
                            </NavItem>

                            <NavItem eventKey="LogOut">
                                <NavIcon><Link to="/splash"><i className="fas fa-sign-out-alt"></i></Link></NavIcon>
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
