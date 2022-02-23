import React from "react";

function HomePage(){
const [imageApi, useImageApi] = React.useState()
    return(
        <>
            <div>
                <div>
                    <imag src={imageApi}/>
                </div>
                <div>
                    <button>Click Me</button>
                </div>
            </div>
        </>
    )
}

export default HomePage;