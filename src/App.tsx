import { ReactElement } from "react";
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


const convert = Array.from(map).filter(function (val) {
  return val != " ";
})

type TileProps = {
  img:string
}


const imageMapAssign = {
  '┓' : "2.png",
  '╺' : "1.png",
  '╹' : "1.png",
  '━' : "3.png",
  '┻' : "4.png",
  '╻' : "1.png",
  '╸' : "1.png",
  '┣' : "4.png",
  '┏' : "2.png",
  '┃' : "3.png",
  '┫' : "4.png",
  '┛' : "2.png",
  '┳' : "4.png",
  '╋' : "5.png",
  '┗' : "2.png"
 }

 const charToImg =(char: string):string => {
 // Todo
 // Objects and Arrays
 imageMapAssign

 const imagesEntries = Object.entries(imageMapAssign)


  return '5.png'
 }

const App = () => {
  const level = 1;
  

  const renderMap = () => {

    // TODO: 4
    // Parse string to array 5
    // return [<div class="img-container"><img width="40" height="40" src="1.png" /></div>]

    let mapRows = map.split('\n') //seperate by line into array1
    mapRows.shift() // remove map: from array
    let mapRowsJoined = mapRows.join('')
    let mapRowsSpliced = mapRowsJoined.split('')



  }
  const rotate = (x: number, y: number) => {
    // TODO:
    // 1. Rotate tile by JS & CSS
  };


  // TODO: convert map to string array 1
  // const map:string[] = map ... 2
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set 3

  const Tile = ({img}:TileProps) => (
    <div className="img-container">
      <img width="40" height="40" src={`/img/${img}`} />      
    </div>
    
  );
  

  

  return (
    <div>
      <img id="title" src="logo.png" />
      <div id="board">
        <div className="container">
          {
            
            

            
            board.map(row => row.map(character => <Tile img={charToImg(character)}/>))

            /* TODO: 
              Render Tiles by user level number 6
            */
          }
        </div>
      </div>
      <h1>
        level:<span id="level">1</span>
      </h1>
    </div>
  );
};
export default App;

