const express = require("express")
const spawnSync = require('child_process').spawnSync;

const router = express.Router()

router.post("/login", (req, res) => {
    const python_file = "support_files/login.py";
    const command_exec = spawnSync("whereis python", [], {shell: true}, {
    // const command_exec = spawnSync("python3", [python_file, req.body.user, req.body.password], {
        stdio: "pipe",
        stderr: "pipe",
    })
    if (command_exec.status === 0 && command_exec.stdout != null){
        res.send(
            typeof(command_exec.stdout.toString()) === "string" ?
                command_exec.stdout.toString() :
                JSON.stringify(JSON.parse(command_exec.stdout.toString()))
        ) 
    }
    else{
        res.send(
            `Command Execution Failed from server: ${command_exec.error}`
        )
    }
  }
)

module.exports = router