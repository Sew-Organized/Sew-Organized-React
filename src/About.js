import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='aboutDiv'>
                <h2 id='aboutDevs'>About the Developers</h2>
                <ul className='aboutUL'>
                    <div>
                        <li className='aboutLI' id='aboutChelsea'>
                            <img src="chelsea.jpeg" alt='chelsea' height="150" width="150"></img>
                            <h3>Chelsea Spangler</h3>
                        </li>
                        <p className='aboutText'>loves to code, knit, crochet, make dumb jokes, and invent cocktails.</p>
                        <div class="social-media-links">
                            <a href="https://www.linkedin.com/in/chelseanspangler/" target="_blank">
                                <image src="../public/li_black.png"></image>
                            </a>
                            <a href="https://github.com/CNSpangler" target="_blank">
                                <image src="../public/GitHub-Mark-30px-plus.png"></image>
                            </a>
                        </div>
                    </div>

                    <div>
                    <li className='aboutLI' id='aboutDakota'>
                        <img src="dakota.jpeg" alt='dakota' height="150" width="150"></img>
                        <h3>Dakota Druley</h3>
                    </li>
                    <p className='aboutText'>is a creative problem solver who dances, paints, and attempts to amuse those around her.</p>
                    <div class="social-media-links">
                            <a href="" target="_blank">
                                <image src="../public/li_black.png"></image>
                            </a>
                            <a href="" target="_blank">
                                <image src="../public/GitHub-Mark-30px-plus.png"></image>
                            </a>
                        </div>
                    </div>

                    <div>
                        <li className='aboutLI' id='aboutDannie'>
                            <img src="dannie.jpeg" alt='dannie' height="150" width="150"></img>
                            <h3>Dannie</h3>
                        </li>
                        <p className='aboutText'></p>
                        <div class="social-media-links">
                            <a href="" target="_blank">
                                <image src="../public/li_black.png"></image>
                            </a>
                            <a href="" target="_blank">
                                <image src="../public/GitHub-Mark-30px-plus.png"></image>
                            </a>
                        </div>
                    </div>

                    <div>
                        <li className='aboutLI' id='aboutJanelle'>  
                            <img src="janelle.jpeg" alt='janelle' height="150" width="150"></img>
                            <h3>Janelle</h3>
                        </li>
                        <p className='aboutText'></p>
                        <div class="social-media-links">
                            <a href="" target="_blank">
                                <image src="../public/li_black.png"></image>
                            </a>
                            <a href="" target="_blank">
                                <image src="../public/GitHub-Mark-30px-plus.png"></image>
                            </a>
                        </div>
                    </div>

                    <div>
                        <li className='aboutLI' id='aboutJenna'>
                            <img src="jenna.jpeg" alt='jenna' height="150" width="150"></img>
                            <h3>Jenna</h3>
                        </li>
                        <p className='aboutText'></p>
                        <div class="social-media-links">
                            <a href="" target="_blank">
                                <image src="../public/li_black.png"></image>
                            </a>
                            <a href="" target="_blank">
                                <image src="../public/GitHub-Mark-30px-plus.png"></image>
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}
