# Gulp start template

## Installation On Windows

1. Downloading [Node.js](https://nodejs.org/en/download/)
2. Open powershell on behalf of the administrator and enter `Set-ExecutionPolicy RemoteSigned` so that in the future there will be no errors associated with the lack of certain rights
3. Run the command `npm install gulp-cli -g` in the console. This command installs Gulp globally, that is, you can run it from any folder on your computer.

## Installation On MacOS

1. Downloading [Node.js](https://nodejs.org/en/download/).
2. After that, in the terminal, write this command `sudo npm install gulp-cli -g`

## Usage
    git clone https://github.com/Karvacky-Roma/Gulp-build.git ./

    npm i

    gulp

## File And Folder System

    %project_folder%
    ├── src
    |   ├── fonts
    |   ├── img
    |   ├── js
    |   |    ├── main.js
    |   |    └── burger.js
    |   ├── scss
    |   |    ├── _fonts.scss
    |   |    ├── _footer.scss
    |   |    ├── _header.scss
    |   |    ├── _reset.scss
    |   |    ├── _config.scss
    |   |    └── style.scss
    |   _footer.html
    |   _head.html
    |   _scripts.html
    |   _header.html
    |   index.html
    |
    └── dist
        ├── fonts
        ├── img
        ├── css
        |    ├── style.css
        |    └── style.min.css
        ├── js
        |    ├── main.js
        |    └── main.min.js
        └── index.html

At the root there are two folders: 
- src folder
- dist folder (that is obtained as a result of the build) 
In the src folder we also observe the folder of fonts, images, scripts and scss files. 
The initial folder contains the compiled style and script files, and a compressed duplicate of the file is also created.
Also this folder will be named the same as the folder of its parent


## Advantages

 - Refreshing browser on save;
 - Ability to collect several html files into one;
 - Optimizes images and converts them to modern format - webp;
 - Ability to collect several javascript files into one;
 - Compiles SCSS files to CSS;
 - SCSS file that resets browser styles;
 - Minification and concatenation of CSS / JS files;
 - Automatic generation of vendor prefixes (-webkit, -moz, -o, -ms) so that older versions of browsers support all css properties;
 - Using the BEM methodology;
 - Sticky footer and aside using grids (you can change the arrangement of the sections in the ***src/scss/config.scss***)                                    
  
  ![screenshot](https://i.ibb.co/CzHwRM6/image-2021-04-04-01-13-55-2.png)
## Contributions 

 - [**Karvackyy Roma**](https://github.com/Karvacky-Roma)
 
Report bugs/errors [here](https://github.com/Karvacky-Roma/Gulp-build/issues)
