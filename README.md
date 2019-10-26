
# Installation
### Local installation
```js
npm install --save cp-fileutil
```

### Global installation
```js
npm install -g cp-fileutil
```

Global installation will give you fileutil command in cmd

# How to use it
This utility package has two functionality, rename and move

#### Ror Rename
##### To rename the file with which contains specific keywords to replace that keywords found in file name

```js
fileutil rename --src="file path" --keyWord="give keywords to find that in file which you want to replace" --replacer="replacement word" 
```

###### *You can also use shortcuts for all arguments as mentioned below*
Example: 

```js
fileutil rename --s="P:\src" --k="ebook" --r="" 
```

#### For Moving File

##### To move file with specific keywords name to different folder
```js
fileutil move --src="file path" --dest="filepath" --replace="Word in file name which you can use to move the file " --fileType="type of file you want to move" 
```

###### *You can also use shortcuts for all arguments as mentioned below*
Example: 
```js
fileutil move --s="P:\src" --d="P:\dest" --r="Mastering" -f="pdf"
```
The above command will move all the files which contains keyword as 'Mastering' from P:\src to P:\dest whose extension is pdf.