#!/bin/bash
DIR="../src/pages/"
STYLE=".scss"
PATTERN="Replace"

for arg in "$@"
do
   cp react-component-template.js "$DIR$arg.js"
   sed -i "" "s/$PATTERN/$arg/g" "$DIR$arg.js"
   touch "$DIR$arg$STYLE"
done