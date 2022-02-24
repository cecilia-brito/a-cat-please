import React from "react";
import { Box, Image } from '@skynexui/components';

function HomePage(){
const [imageApi, setImageApi] = React.useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uafLGBoTi75Xi7j8O2ONfiVwN6jwOpz-Eg&usqp=CAU')
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
					backgroundRepeat: 'repeat', backgroundSize: "50px", backgroundPosition: "10px", backgroundOrigin: 'content-box', backgroundColor: "#F8F8EA"}}>
                <Box className="box-img-cat" styleSheet={{backgroundColor: "#F8F8EA", borderRadius: "40px", maxWidth: "600px", maxHeight: "400px", width: "100%", height: "100%", display: 'grid', alignItems: 'center', justifyContent: 'center', padding: '40px', border: '8px solid black', gridTemplateRows: '80% 20%', gridTemplateColumns:'80%', gridGap: '20px'}}>
                    <Box styleSheet={{width: '100%', height: '100%'}}>
                        <Image styleSheet={{width: '100%', height: '100%',borderRadius: '40px', border: '4px solid rgba(0,0,0, 0.8)'}} src={imageApi}/>
                    </Box>
                    <Box styleSheet={{display:'block', textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
                        <button onClick={getImage}>Get a kitty</button>
                    </Box>
                    <style jsx>
                        {`
                            @import url('https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap');
                            
                            .box-img-cat{
                                grid-template-areas: "image"
                                                      "button";
                            }

                            Image{
                                grid-area: 'image';
                            }

                            button{
                                padding: 10px;
                                border: 2px solid white;
                                background-color: black;
                                color: #F8F8EA;
                                border-radius: 10px;
                                cursor: pointer;
                                transition: 0.5s all;
                                font-weight: bold;
                                font-family: 'ZCOOL QingKe HuangYou', cursive;
                                font-size: 30px;
                                grid-area: 'button';
                            }
                            button:hover{
                                color: black;
                                background-color: white;
                                border: 2px solid black;
                            }
                        `}
                    </style>
                </Box>
            </Box>
        </>
    )
}

export default HomePage;