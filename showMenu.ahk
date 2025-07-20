#NoEnv
#SingleInstance Force

1::
    CoordMode, Mouse, Screen
    MouseGetPos, xpos, ypos
    Run, %ComSpec% /c npx electron "%A_ScriptDir%" %xpos% %ypos%,, Hide
return
