const Grid_SIZE = 21;

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * Grid_SIZE) + 1,
        y: Math.floor(Math.random() * Grid_SIZE) + 1
    }
}


export function outSideGrid(position){
    return (
        position.x < 1 || position.x > Grid_SIZE || 
        position.y < 1 || position.y > Grid_SIZE 
    )
}