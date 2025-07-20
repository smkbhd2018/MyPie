#NoEnv
#SingleInstance Force

1::
    CoordMode, Mouse, Screen
    MouseGetPos, xpos, ypos
    ; Launch Electron directly to avoid the startup delay from npx
    Run, "%A_ScriptDir%\node_modules\.bin\electron.cmd" "%A_ScriptDir%" %xpos% %ypos%,, Hide
return
