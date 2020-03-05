console.log('saved palette', this.state.savedPalette);
const savedPaletteArray = this.state.savedPalette.map(palette => {
    console.log('palette in map', palette)
    return [palette];
})
console.log('array of arrays??', savedPaletteArray);

return (
    <div>
        <h1>Saved palettes</h1>
        <div className="paletteContainer">
                <div className="palette">
                    {
                        savedPaletteArray.map(palette => {
                            return(
                            <div>
                                <h2>{palette.palette_name}</h2>
                                <RandomPalette palette={palette} />
                            </div>)
                        })
                    }
            </div>
            )
    }
        <button>Remove</button>
    </div>
    </div>
)



console.log('saved palette', this.state.savedPalette);
const savedPaletteArray = this.state.savedPalette.map(palette => {
    console.log('palette in map', palette)
    return [palette];
})
console.log('array of arrays??', savedPaletteArray);

return (
    <div>
        <h1>Saved palettes</h1>
        <div className="paletteContainer">
            {/* // iterate over savedPalettes and return an array of arrays

            // iterate over the returned array of arrays savedPalettes and for each palette array, show name and render a RandomPalette component
            this.state.savedPalettes.map(savedPalette =>  */}
                <div className="palette">
                    {
                        savedPaletteArray.map(palette => {
                            return(
                            <div>
                                <h2>{palette.palette_name}</h2>
                                <RandomPalette palette={palette} />
                            </div>)
                        })
                    }
            </div>
            )
    }
        <button>Remove</button>
    </div>
    </div>
)