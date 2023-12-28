import { useState } from "react";
import { IoArrowUndoSharp, IoArrowRedoSharp } from "react-icons/io5";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
function App() {
  const [fonts, setFonts] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [position, setPositon] = useState("");
  const [text, setText] = useState("");
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      const newText = e.target.value;
      setText(newText);
      setUndo([...undo, newText]);
      setRedo([]);
    }
  };

  const handleUndo = () => {
    if (undo.length > 1) {
      const prvText = undo[undo.length - 2];
      const updatedUndo = undo.slice(0, -1);
      setUndo(updatedUndo);
      setRedo([...redo, text]);
      setText(prvText);
    }
  };

  const handleRedo = () => {
    if (redo.length > 0) {
      const nextRedo = redo[redo.length - 1];
      const updatedRedo = redo.slice(0, -1);
      setRedo(updatedRedo);
      setUndo([...undo, text]);
      setText(nextRedo);
    }
  };
  const hendelPosition = positions =>{
    if(positions==="center"){
      return setPositon(positions)
    }
    else if(positions === "right"){
      return setPositon(positions)
    }
    else{
  return setPositon(positions)

}
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-9/12 mx-auto border rounded p-5 flex gap-5 bg-[#08183F]">
        <div className="w-[70%] border rounded p-5 bg-white text-balck">
          <div className="flex gap-5 pb-3">
            <button
              onClick={handleUndo}
              className="bg-[#215ef8] px-4 py-1 rounded text-white flex gap-2 items-center"
            >
              <IoArrowUndoSharp />
              Undo Text
            </button>
            <button
              onClick={handleRedo}
              className="bg-[#215ef8] px-4 py-1 rounded text-white flex gap-2 items-center"
            >
              <IoArrowRedoSharp />
              Redo Text
            </button>
          </div>
          <div className={`${fonts}`} style={{ color: color, fontSize: size, textAlign: position }}>
            {text ? text : "New text"}
          </div>
        </div>
        <div className="w-[30%] border rounded p-5 ">
          <div>
            <label htmlFor="font" className="text-white">
              Font
            </label>
            <select
              onChange={(e) => setFonts(e.target.value)}
              name=""
              id=""
              className="w-full text-lg p-2 rounded border-none outline-none"
            >
              <option value="OpenSans">Open Sans</option>
              <option value="Roboto">Roboto</option>
              <option value="Playfair">Playfair</option>
              <option value="SerifDisplay">SerifDisplay</option>
              <option value="Sevillana">Sevillana</option>
              <option value="Carattere">Carattere</option>
            </select>
          </div>
          <div className="py-4 flex items-center gap-5">
            <div className="w-[50%]">
              <label htmlFor="size" className="text-white text-lg mr-1">
                Size
              </label>

              <select
                onChange={(e) => setSize(e.target.value)}
                name=""
                id=""
                className="w-[70%] text-lg px-1 py-0 rounded border-none outline-none"
              >
                <option value="8px">8</option>
                <option value="10px">10</option>
                <option value="12px">12</option>
                <option value="14px">14</option>
                <option value="16px">16</option>
                <option value="18px">18</option>
                <option value="20px">20</option>
                <option value="22px">22</option>
                <option value="24px">24</option>
                <option value="26px">26</option>
                <option value="28px">28</option>
                <option value="30px">30</option>
                <option value="22px">22</option>
                <option value="34px">34</option>
                <option value="36px">36</option>
                <option value="38px">38</option>
                <option value="40px">40</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label htmlFor="color" className="text-white text-lg mr-1">
                Color
              </label>
              <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
                className="p-0 rounded"
              />
            </div>
          </div>
          <div className="flex gap-5 items-center justify-center text-white text-xl py-2">
            <span onClick={()=>hendelPosition('left')}>
              <FaAlignLeft />
            </span>
            <span onClick={()=>hendelPosition('center')}>
              <FaAlignCenter />
            </span>
            <span onClick={()=>hendelPosition('right')}>
              <FaAlignRight />
            </span>
          </div>
          <input
            type="text"
            placeholder="Add Text"
            className="w-full p-2 rounded"
            onKeyDown={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
