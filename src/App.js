import { useEffect, useState } from "react";
import { Profiler } from "react";
import "./App.css";

import ChatRoom from "./ChatRoom.js";
function App() {
  const [roomId, setRoomId] = useState("general");
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    // Aggregate or log render timings...
    console.log(
      id +
        " " +
        actualDuration +
        " " +
        baseDuration +
        " " +
        startTime +
        " " +
        commitTime
    );
  }
  return (
    <>
      <Profiler id="App" onRender={onRender}>
        <label>
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <hr />
        <ChatRoom roomId={roomId} />
      </Profiler>
    </>
  );
}

export default App;

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
// }

// function StatusButton() {
//   const isOnline = useOnlineStatus();
//   return (
//     <button disabled={!isOnline}>{isOnline ? "Save" : "Reconnecting"}</button>
//   );
// }
