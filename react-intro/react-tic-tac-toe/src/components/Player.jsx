function Player(props) {
      // props is an object that contains all of the things that I passed in
    //  we need to refer to those things with the same name that we used when passing them in
    console.log(props.whichPlayer)

    // this is my return, which shows what will render when I am using this component
    // this is all jsx, so there needs to be one outermost HTML element
    // BUT ALSO if am using something like a variable, I need to use {}
    return (
        <div className = {props.whichPlayer}>
          <h2>Player {props.whichPlayer}</h2>
          <h3>Wins: </h3>
        </div>
      )
  }
  
  export default Player;
