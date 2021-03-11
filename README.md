# Gulp start template

Starter template, includes the work of different people that I put together in one project

> P.S. some points will be explained in this readme file, other less important information will be commented out in the code

## Summary
  - [Advantages](#advantages)
  - [Installlation on Windows](#installation-on-windows)
  - [Installlation on macOS](#installation-on-macos)
  - [Usage](#usage)
  - [File And Folder System](#file-and-folder-system)
  - [Authors](#authors)

## Installation On Windows

1. Downloading [Node.js](https://nodejs.org/en/download/)
2. Open powershell on behalf of the administrator and enter `Set-ExecutionPolicy RemoteSigned` so that in the future there will be no errors associated with the lack of certain rights
3. Run the command `npm install gulp-cli -g` in the console. This command installs Gulp globally, that is, you can run it from any folder on your computer.

## Installation On MacOS

1. Before installing, make sure that on device is installed [Homebrew](https://brew.sh/) and [Node.js](https://nodejs.org/en/download/).
2. After that, in the terminal, write this command `sudo npm install gulp-cli -g`

## Usage
    git clone https://github.com/Karvacky-Roma/Gulp-build.git
    cd my-folder-name
    npm i
    gulp

## File And Folder System

    %project_folder%
    ├── #src
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
    └── %initial_folder%
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
- initial folder (that is obtained as a result of the build) 
In the src folder we also observe the folder of fonts, images, scripts and scss files. 
The initial folder contains the compiled style and script files, and a compressed duplicate of the file is also created.


## Advantages

 - Refreshing browser on save;
 - Ability to collect several html files into one;
 - Optimizes images and converts them to modern format - webp;
 - Ability to collect several javascript files into one;
 - Compiles SCSS files to CSS;
 - SCSS file with all slick slider classes;
 - SCSS file that resets browser styles;
 - Minification and concatenation of CSS / JS files;
 - Automatic generation of vendor prefixes (-webkit, -moz, -o, -ms) so that older versions of browsers support all css properties;
 - Using the BEM methodology;
## Contributions 

 - [**Karvackyy Roma**](https://github.com/Karvacky-Roma)
 - [**FLS**](https://github.com/FreelancerLifeStyle)
 
Report bugs/errors [here](https://github.com/Karvacky-Roma/Gulp-build/issues)
