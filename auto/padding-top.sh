#!/bin/bash
DIR="../src/pages/"
PATTERN="Replace"

for arg in "$@"
do
   cp padding-top.scss "$DIR/$arg/$arg.scss"
   sed -i "" "s/$PATTERN/$arg/g" "$DIR/$arg/$arg.scss"
done