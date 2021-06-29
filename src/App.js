import logo from './logo.svg';
import github from './github.png'
import javascript from './javascript.png'
import nodejs from './nodejs.png'
import springboot from './springboot.png'
import api from './api.png'
import java from './java.png'
import mysql from './mysql.png'
import mongodb from './mongodb.svg'
import osm from './osm.jpg'
import linkedin from './linkedin.png'
import vscode from './vscode.png'
import discord from './discord.png'
import python from './python.png'

import './App.css';
function App() {

    const gh = () => {
        window.location.href = 'https://github.com/icepaq';
    }

    return (
        <div className='wrapper'>
            <div className='menu'>
                <div className='menu_item'>
                    <a className='nolink' href='https://github.com/icepaq'>GitHub</a>
                </div>
                <div className='menu_item'>
                    <a className='nolink' href='https://www.linkedin.com/in/antonre/'>LinkedIn</a>
                </div>
                <div className='menu_item'>
                    <a className='nolink' href="#contactme">Contact</a> 
                </div>
            </div>


            <div className='firstRow'>
                <div className='header'>
                    <h1>Hi I'm Anton!</h1>
                    <span>I'm a fullstack developer with a focus on backend development.</span>
                </div>
                <img src={logo} className='App-logo' alt='logo' />
            </div>

            <div className='secondRow'>
                <a className='projects' href="#fourthRow">My Projects</a>
                <a className='skills' href='#thirdRow'>My Skills</a>
            </div>

            <div className='thirdRow' id='thirdRow'>
                <h1 classNam='skillsTitle'>Skills</h1>
                <p className='subtext'>Here is a list of my skills.</p>


                <div className='skillItems'>
                    <div className='skillItem'>
                        <span className='yellowglow'>JavaScript</span> 
                    </div>
                    <div className='skillItem'>
                        <span className='orangeglow'>Java</span>
                    </div>
                    <div className='skillItem'>
                        <span className='yellowblueglow'>Python</span>
                    </div>
                    <div className='skillItem'>
                        <span className='whiteglow'>Git</span>
                    </div>
                </div>
                <div className='skillItems'>
                    <div className='skillItem'>
                        <span className='blueglow'>React</span>
                    </div>
                    <div className='skillItem'>
                        <span className='whiteglow'>Express</span>
                    </div>
                    <div className='skillItem'>
                        <span className='whiteglow'>Next</span>
                    </div>
                    <div className='skillItem'>
                        <span className='greenglow'>Spring Boot</span>
                    </div>
                </div>
                <div className='skillItems'>
                    <div className='skillItem'>
                        <span className='greenglow'>MongoDB</span>
                    </div>
                    <div className='skillItem'>
                        <span className='blueglow'>MySQL</span>
                    </div>
                    <div className='skillItem'>
                        <span className='blueglow'>Docker</span>
                    </div>
                    <div className='skillItem'>
                        <span className='orangeglow'>AWS</span>
                    </div>
                </div>
            </div>

            <div className='fourthRow' id="fourthRow">
                <h1 className='projectsTitle'>Projects</h1>
                <p className='projectsSubtext'>Take a look at my projects. Clicking on one will take you to the GitHub repository or live demo if there is one. See the rest of my projects on my <a className='link' href='https://github.com/icepaq'>GitHub.</a></p>

                <div className='projectsRow'>
                    <div className='projectItem left'>
                        <div className='icons'>
                            <img src={java} className='icon' alt='js' />
                            <img src={springboot} className='smallicon' alt='springboot' />
                            <img src={mysql} className='smallicon' alt='mysql' />
                        </div>
                        <h2> <a className='nolink' href='https://github.com/icepaq/RunCommandAPIEndpoint'> Run Command </a></h2>
                        <img src={api} className='projectImage' alt='api' />
                        <p className='description'>This API allows a you to run commands on a server without needing
                            to login. Made for automation tasks and managing several servers. A <a className='link' href='https://github.com/icepaq/RunCommand-Consumer'> React application
                            </a> was created to consume this API.</p>
                    </div>
                    <div className='projectItem right'>
                        <div className='icons shifted negativemargin'>
                            <img src={javascript} className='icon_' alt='js' />
                            <img src={nodejs} className='icon_' alt='nodejs' />
                            <img src={mongodb} className='mongoicon' alt='mongodb' />
                        </div>
                        <h2 className='opensourcemorning'><a className='nolink' href='https://github.com/icepaq/OpenSourceMorning'> Open Source Morning </a></h2>
                        <img src={osm} className='projectImage' alt='api' />
                        <p className='description'>Collaborative project. Implemented OpenWeather API and backend of the login system.</p>
                    </div>
                </div>

                <div className='projectsRow'>
                    <div className='projectItem left'>
                        <div className='icons'>
                            <img src={javascript} className='icon' alt='js' />
                        </div>
                        <h2><a className='nolink' href='https://github.com/icepaq/TakeABreak-VScode'> Take A Break </a></h2>
                        <img src={vscode} className='projectImage' alt='api' />
                        <p className='description'>Visual Studio Code extension that will tell you to take periodic breaks. Built using the Visual Studio Code API.</p>
                    </div>
                    <div className='projectItem right'>
                        <div className='icons shifted nmargin'>
                            <img src={python} className='icon' alt='js' />
                        </div>
                        <h2 > <a className='nolink' href='https://github.com/icepaq/Community-Bot'> Community Bot </a></h2>
                        <img src={discord} className='projectImage' alt='api' />
                        <p className='description'>Discord bot with a leveling system. Built using the Discord API.</p>
                    </div>
                </div>
            </div>

            <div className='contactme' id='contactme'>
                <h1>Contact Me</h1>
                <p>Let's get in touch, anton@antoncodes.xyz or add me on <a className='link' href='https://www.linkedin.com/in/antonre/'>LinkedIn</a> </p>
            </div>
        </div>
    );
}

export default App;
