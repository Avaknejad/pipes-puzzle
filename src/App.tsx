import "./App.css";

const map = `
map:
┓╻╹┻╸┛┃┏
┗┏┗┳┛┛┓╻
╹╋┗╻┫┃┏╻
┛┻━┻╹╻┛┛
┛━┏━╸┳┗┏
╻╹┣╸┏┻┃┛
┻━┻━╋━━┓
┗┃╹╺┫━╺╸`;

let seperatedBoard = map.split('\n');
let splicedBoard = seperatedBoard.splice(2, seperatedBoard.length)
let board = splicedBoard.map(item => item.split(''))

const convert = Array.from(map).filter(function(val){
  return val != " ";
})


// const imageMapAssign = {
//   4 : '┻',
//   2 : '┛',
//   1 : '╻',
//   : '╹',
//   5 : '╋',
//   3 : '┃'
// }

const App = () => {
  const level = 1

  const renderMap = () => {
    // TODO: 4
    // Parse string to array 5

    // return [<div class="img-container"><img width="40" height="40" src="1.png" /></div>]
  }
  const rotate = (x:number, y:number) => {
    // TODO:
    // 1. Rotate tile by JS & CSS
  };
  

  // TODO: convert map to string array 1
  // const map:string[] = map ... 2
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set 3

  const Tile = () => (
    <div className="img-container">
      <img width="40" height="40" src="1.png" />
    </div>
  );

  return (
    <div>
      <img id="title" src="logo.png" />
      <div id="board">
        <div className="container">
          {
            /* TODO: 
              Render Tiles by user level number 6
            */
          }
         <Tile />
        </div>
      </div>
      <h1>
        level:<span id="level">1</span>
      </h1>
    </div>
  );
};
export default App;
