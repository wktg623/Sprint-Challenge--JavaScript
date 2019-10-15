// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(props){

    this.length = props.length;
    this.width = props.width;
    this.height = props.height; 
  }
  volume(){
    return (this.length *  this.width* this.height)
  }

  surfaceArea(){
      return 2*(this.length *this.width+this.length*this.height+this.width*this.height)
  }
}
   
  
  
  
  const shape = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })


  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(shape.volume()); // 100
  console.log(shape.surfaceArea()); // 130
  
  

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    surfaceAreaCube(){return 6*(this.length);
}
}

//Volume for Cube is the same for Volume of Cuboid
const cube = new CubeMaker({          //stretch
    length: 3,
    width: 3,
    height: 3
      })
console.log(cube.surfaceAreaCube());
console.log(cube.volume())
