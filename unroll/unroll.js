function unroll(squareArray) {
    const result = [];

  
    while(squareArray.length > 0) {

      // Moving from left to right
      result.push(...squareArray.shift())
    

      // Moving from top to bottom
      for(let i = 0; i < squareArray.length; i++) {
        if(squareArray[i].length > 0) {
          result.push(squareArray[i].pop())
        }else{
          return null
        }
      }

      // Moving from right to left
      if(squareArray.length > 0) {
        result.push(...squareArray.pop().reverse())
      }else{
        return null
      }

      // Moving from bottom to top
      for(let i = squareArray.length - 1; i >= 0; i--) {
        if(squareArray.length > 0) {
          result.push(squareArray[i].shift())
        }else{
          return null
        }
      }
    }
    return result
    
  }
  



module.exports = unroll;
