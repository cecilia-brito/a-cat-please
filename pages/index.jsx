import React from "react";
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

function HomePage(){
const [imageApi, setImageApi] = React.useState()
const url = 'https://api.thecatapi.com/v1/images/search'

async function getImage(){
    let data;
   await fetch(url).then(
                async function(response) { 
                    data = await response.json()
                    setImageApi(data[0].url)
                }
                ).catch(
                    (err) => {
                        console.log(err)
                    })
}
    return(
        <>
            <Box styleSheet={{display: 'flex', alignItems: 'center', justifyContent: 'center',
					backgroundImage: 'url(https://svgsilh.com/png-1024/1314467.png)',
					backgroundRepeat: 'repeat', backgroundSize: "50px", backgroundPosition: "10px", backgroundOrigin: 'content-box'}}>
                <Box styleSheet={{backgroundColor: "white", borderRadius: "40px", maxWidth: "600px", maxHeight: "400px", width: "100%", height: "100%", display: 'grid', alignItems: 'center', justifyContent: 'center', padding: '40px'}}>
                    <Box styleSheet={{display:'block', maxWidth: '500px', width: '100%', maxHeight: '300px', height: '100%'}}>
                        <Image styleSheet={{maxWidth: '100%', maxHeight: '100%', borderRadius: '40px'}} src={imageApi}/>
                    </Box>
                    <Box styleSheet={{display:'block', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
                        <button onClick={getImage}>Click Me</button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomePage;