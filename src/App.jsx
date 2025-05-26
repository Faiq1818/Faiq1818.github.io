import { useState } from 'react'
import './App.css'


function App() {
  return (
    <div style={styles.container}>
      <div style={styles.containermid}>
        <div>
          <p style={styles.texts_name}>Faiq Ghozy Erlangga</p>
        </div>
        <div>
          <p style={styles.texts}>halo</p>
        </div>
      </div>
    </div>
  );
}


const styles = {
  texts_name: {
    color: "#2C3930",
    alignItems: "",
    // padding: "20px"
  },

  texts: {
    color: "black",
    alignItems: "black",
    // padding: "20px"
  },

  container: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    border: "30px solid #DCD7C9",
    boxShadow: "inset 0 0 0 5px #A27B5C",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#DCD7C9",
    boxSizing: "border-box",
  },

  containermid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  }
}

export default App; 
