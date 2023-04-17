import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const LoadingFallBack = (props) => {
    if (props.children === "Normal") {
        console.log(props.children)
         return (
        <div style={{color:"white"}}>
            Loading...
        </div>
    );  
    }
    else {
        console.log(props.children)
        return (
        
      
            <Html>
                <div style={{color:"white"}}>
                    Loading...
                </div>
            </Html>
   
    );
    }
 
};

export default LoadingFallBack;