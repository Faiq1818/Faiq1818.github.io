import * as motion from "motion/react-client"

export default function RightDownButton() {
  return (
    <div className="content-end space-y-4">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        style={box}
      >
        <p style={styles.texts} className="text-2xl">About</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        style={box}
      >
        <p style={styles.texts} className="text-2xl">Project</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        style={box}
      >
        <p style={styles.texts} className="text-2xl">Contact</p>
      </motion.div>
    </div>
  )
}

const styles = {
  texts: {
    color: "#3F4F44",
  },
}

const box = {
  backgroundColor: "#DCD7C9",
}
