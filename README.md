
# Installation
### local installation
`npm install --save cp-fileutil`

### global installation
`npm install -g cp-fileutil`

Global installation will give you fileutil command in cmd

# How to use it
This utility package has two functionality, rename and move

#### for rename
##### Example: Just to rename the file with which contains specific keywords to replace that keywords found in file name

`fileutil rename --src="file path" --keyWord="give keywords to find that in file which you want to replace" --replacer="replacement word" `

###### *you can also use shortcuts for all arguments as mentioned below*
Example: 

`fileutil rename --s="P:\src" --k="ebook" --r="" `

#### for moving file

##### Example: to move file with specific keywords name to different folder
`fileutil move --src="file path" --dest="filepath" --keywords="give keywords to filter file name using that" --fileType="type of file you want to move"`

###### *you can also use shortcuts for all arguments as mentioned below*
Example: 
`fileutil move --s="P:\src" --d="P:\dest" --r="Mastering"`
