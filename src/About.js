import React, { Component } from 'react'
import Nav from './Nav.js';
import Header from './Header.js';

export default class About extends Component {
    render() {
        return (
            <>
            <Header />
            <Nav />
            <div className='aboutDiv'>
                <h2 id='aboutDevs'>About the Developers</h2>
                <ul className='aboutUL'>
                    <div>
                        <li className='aboutLI' id='aboutChelsea'>
                            <img src="chelsea.jpeg" alt='chelsea' height="150" width="150"></img>
                            <h3>Chelsea Spangler</h3>
                        </li>
                        <p className='aboutText'>loves to code, knit, crochet, make dumb jokes, and invent cocktails.</p>
                        <div className="social-media-links">
                            <a href="https://www.linkedin.com/in/chelseanspangler/" target="_blank">
                                <img src="li_black.png"></img>
                            </a>
                            <a href="https://github.com/CNSpangler" target="_blank">
                                <img src="GitHub-Mark-30px-plus.png"></img>
                            </a>
                        </div>
                    </div>
                    <div>
                    <li className='aboutLI' id='aboutDakota'>
                        <img src="dakota.jpeg" alt='dakota' height="150" width="150"></img>
                        <h3>Dakota Druley</h3>
                    </li>
                    <p className='aboutText'>is a creative problem solver who dances, paints, and attempts to amuse those around her.</p>
                    <div className="social-media-links">
                            <a href="https://www.linkedin.com/in/dakota-druley/" target="_blank">
                                <img src="li_black.png"></img>
                            </a>
                            <a href="https://github.com/dakotadruley" target="_blank">
                                <img src="GitHub-Mark-30px-plus.png"></img>
                            </a>
                        </div>
                    </div>

                    <div>
                        <li className='aboutLI' id='aboutDannie'>
                            <img src="dannie.jpeg" alt='dannie' height="150" width="150"></img>
                            <h3>Dannie Schumaker</h3>
                        </li>
                        <p className='aboutText'>makes beautiful and useful things with needles, hooks, words and code. </p>
                        <div className="social-media-links">
                            <a href="https://www.linkedin.com/in/dannieschumaker/" target="_blank">
                                <img src="li_black.png"></img>
                            </a>
                            <a href="https://github.com/DannieSchu" target="_blank">
                                <img src="GitHub-Mark-30px-plus.png"></img>
                            </a>
                        </div>
                    </div>

                    <div>
                        <li className='aboutLI' id='aboutJanelle'>  
                            <img src="janelle.jpeg" alt='janelle' height="150" width="150"></img>
                            <h3>Janelle Mellor</h3>
                        </li>
                        <p className='aboutText'></p>
                        <div className="social-media-links">
                            <a href="https://www.linkedin.com/in/janellemellor/" target="_blank">
                                <img src="li_black.png"></img>
                            </a>
                            <a href="https://github.com/janellemellor" target="_blank">
                                <img src="GitHub-Mark-30px-plus.png"></img>
                            </a>
                        </div>
                    </div>

                    <div>
                        <li className='aboutLI' id='aboutJenna'>
                            <img src="jenna.jpeg" alt='jenna' height="150" width="150"></img>
                            <h3>Jenna Goldman</h3>
                        </li>
                        <p className='aboutText'>Jenna Goldman is a full-stack developer who also loves crafting, baking, and looking at cute animal videos on the internet.</p>
                        <div className="social-media-links">
                            <a href="https://www.linkedin.com/in/jennagoldman/" target="_blank">
                                <img src="li_black.png"></img>
                            </a>
                            <a href="https://github.com/jennagoldman" target="_blank">
                                <img src="GitHub-Mark-30px-plus.png"></img>
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
            </>
        )
    }
}
