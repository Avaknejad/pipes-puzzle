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

const imageMapAssign = {
  0 : '┻',
  1 : '┛'
}

const App = () => {
  const level = 1

  const renderMap = () => {
    // TODO:
    // Parse string to array

    // return [<div class="img-container"><img width="40" height="40" src="1.png" /></div>]
  }
  const rotate = (x:number, y:number) => {
    // TODO:
    // 1. Rotate tile by JS & CSS
  };
  

  // TODO: convert map to string array
  // const map:string[] = map ...
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

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
              Render Tiles by user level number
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
