import { useState } from 'react'
import './App.css'


function App() {
  return (
    <div style={styles.container}>
      <div style={styles.containermid}>
        <div>
          <p style={styles.texts_name} className="text-5xl font-semibold">Faiq Ghozy Erlangga</p>
        </div>

        <div className="content-end space-y-4">
          <p style={styles.texts} className="text-2xl">About</p>
          <p style={styles.texts} className="text-2xl">Project</p>
        </div>
      </div>
    </div >
  );
}


const styles = {
  texts_name: {
    color: "#3F4F44",
  },

  texts: {
    color: "#3F4F44",
  },

  container: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    border: "30px solid #DCD7C9",
    boxShadow: "inset 0 0 0 5px #A27B5C",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#DCD7C9",
    boxSizing: "border-box",
  },

  containermid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%"
  }
}

export default App; 
