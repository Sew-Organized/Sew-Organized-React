import React, { Component } from 'react'
import { getFloss } from './services/API.js';
import Floss from './Floss.js';
import request from 'superagent';
// import RandomPalette from 'RandomPalette.js';

export default class Detail extends Component {
        state = {
            floss: {},
            palettes: [],
            randomPalette: [],
            dmcData: [],
        };

    async componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));

        const data = await (await getFloss(this.props.match.params.id, user));
        if (data.body) {
            console.log(data.body);
            this.setState({ floss: data.body })
        }
        const dmcData = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/colors`)

        // double check data format that sets state
        this.setState({ dmcData: dmcData.body })
    }

        // generates five random colors from color api, converts to nearest DMC colors, and changes format of data
        generateApiColors = async () => {
            const randomPalette = await request.get(`https://mighty-mesa-93390.herokuapp.com/api/scheme/:id`);
            this.setState({ randomPalette: randomPalette.body });
            this.dmcMatches();
        };
    
        // takes full DMC color object array and transforms into array of arrays
        transformPaletteData = () => {
            // turns dmc colors data into arrays for compatibility reasons
            const dmcColorList = this.state.dmcData.map(color => Object.values(color));
            return dmcColorList;
        };
    
        // take the array of objects returned by generateApiColors
        dmcMatches = () => {
            const matchedDMCIds = this.state.randomPalette.map(object => {
                return this.matchDMC(object.r, object.g, object.b) 
            })
            const matchedDMCObjects = matchedDMCIds.map(id => {
                return this.findById(this.state.dmcData, id);
            })
            this.setState({ matchedDMCObjects });
        }
    
        // does color math, and is called in matchDMC
        distanceFromColor(idx, r, g, b) {
            const dmcColorList = this.transformPaletteData();
            const tr = dmcColorList[idx][2];
            const tg = dmcColorList[idx][3];
            const tb = dmcColorList[idx][4];
            const baseDistance = ((r - tr) * (r - tr)) + ((g - tg) * (g - tg)) + ((b - tb) * (b - tb));
            const distance = Math.sqrt(baseDistance);
            return distance;
        }
    
        // where the magic happens
        matchDMC = (rgbRed, rgbGreen, rgbBlue) => {
            const dmcColorList = this.transformPaletteData();
            const distanceList = [];
            for (let i = 0; i < dmcColorList.length; i++) {
                const candidateDist = this.distanceFromColor(i, rgbRed, rgbGreen, rgbBlue);
                distanceList[i] = [candidateDist, i];
            }
            // sort the list in ascending order
            distanceList.sort(function(a, b){return a[0]-b[0]});
            const dmcI = dmcColorList[distanceList[0][1]][0];
            return dmcI;
        }
    
        findById = (array, id) => {
            for (let index = 0; index < array.length; index++) {
                const item = array[index];
                if (item.id === id) {
                    return item;
                } 
            }
        };

    render() {
        return (
            <div>
                <ul className='flossDetailContainer'>
                    {/* <Floss floss={ this.state.floss } /> */}
                </ul>
                <p>Don't have the color your project calls for? Click below to generate similar DMC colors:</p>
                <button className="primary" onClick={this.generateApiColors}>Generate Color Matches</button>
                <div>
                    { this.state.matchedDMCObjects 
                    ? 
                    <div>
                        {/* <RandomPalette palette={this.state.matchedDMCObjects} /> */}
                    </div>
                    : '' }
                </div>
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import { getFloss } from './services/API.js';
// import Floss from './Floss.js';
// // import request from 'superagent';
// // import RandomPalette from 'RandomPalette.js';

// export default class Detail extends Component {
//         state = {
//             floss: {},
//         };

//     async componentDidMount() {
//         const user = JSON.parse(localStorage.getItem('user'));

//         const data = await (await getFloss(this.props.match.params.id, user));
//         if (data.body) {
//             console.log(data.body);
//             this.setState({ floss: data.body })
//         }
//     }

//     generateApiColors = async() => {
//         const paletteData = await (await getFloss(this.props.match.params.id, user));
//         if (data.body) {
//             console.log(data.body);
//             this.setState({ floss: data.body })
//         }


//         /api/scheme/:id
//     }

//     render() {
//         return (
//             <div>
//                 <ul className='flossDetailContainer'>
//                     {/* <Floss floss={ this.state.floss } /> */}
//                 </ul>
//                 <p>Don't have the color your project calls for? Click below to generate similar DMC colors:</p>
//                 <button onClick={this.generateApiColors}>Generate Color Matches</button>
//                 <div>
//                     { this.state.matchedDMCObjects 
//                     ? 
//                     <div>
//                         {/* <RandomPalette palette={this.state.matchedDMCObjects} /> */}
//                     </div>
//                     : '' }
//                 </div>
//             </div>
//         )
//     }
// }