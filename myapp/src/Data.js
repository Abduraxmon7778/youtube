export const API_KEY = 'AIzaSyBxCmDPYuq2rvd9rgizF7tFXcE3VnBodk8'

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
        
    }
    else{
        return value;
    }
}