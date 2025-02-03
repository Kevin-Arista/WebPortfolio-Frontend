xargs -- is used to convert any pipelined streamed inputs, as arguments to the following command

Why use it? In case the command does not accept streamlined inputs, and thus only as parameters i.e. after the command has been declared

-i [in place editing] -- allow us to modify the file and save changes on that same file, no going back!

How to be cautious? We can define a filename in order to store a backup (oriignal format) of the file i.e. sed -i ".bac" "s/pattern/replace/g" "filename.txt"

g -- the character g at the end of our pattern replacement string for sed is used to say let's continue replacing all the patterns until this specific string ends, not just the first instance

[exporting single variables|functions]

define variable|function with `export const myVar`

[exporting multiple variables|functions]

define variable|function each with `export const myVar` or `export const myFunction`

define variables|functions each with `const myVar` or `const myFunction`
later `export {myVar, myVar2, myFunction}` proceeded by a `export default myVar2`

[importing variables|functions]

`import defaultNamedExport, {nonDefaultNamedExport, nonDefaultNamedExport2} from './myExports.js'`
