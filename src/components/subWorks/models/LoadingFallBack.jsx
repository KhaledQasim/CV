import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const LoadingFallBack = (props) => {
    if (props.children === "Normal") {
        
         return (
        <div style={{color:"white"}}>
            Loading...
        </div>
    );  
    }
    if (props.children === "NormalImage") { 
        return (
            <div style={{color:"white"}}>
                Image...
            </div>
        );  
    }
    else {
       
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