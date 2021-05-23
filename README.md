# Gulp start template

## Install On Windows

1. Downloading [Node.js](https://nodejs.org/en/download/)
2. Open powershell on behalf of the administrator and enter `Set-ExecutionPolicy RemoteSigned` so that in the future there will be no errors associated with the lack of certain rights
3. Run the command `npm install gulp-cli -g` in the console. This command installs Gulp globally, that is, you can run it from any folder on your computer.

## Install On MacOS

1. Downloading [Node.js](https://nodejs.org/en/download/).
2. After that, in the terminal, write this command `sudo npm install gulp-cli -g`

## Usage
   
    npm i

    npm start

and open localhost:5000
## File And Folder System

    %project_folder%/
    ├── src/
    |   ├── fonts/
    |   ├── img/
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
    └── dist/
        ├── fonts/
        ├── img/
        ├── css
        |    ├── style.css
        |    └── style.min.css
        ├── js
        |    ├── main.js
        |    └── main.min.js
        └── index.html

- `src/` - the source folder contains the main files for development
    - `fonts/` - directory with fonts
    - `img/` - directory with images
    - `js/`
        - `main.js` - your main scripts and import of all scripts
        - `burger.js` - opens burger menu
    - `scss/`
        - `_fonts.scss` - fonts imported using google fonts
        - `_footer.scss` - footer styles
        - `_header.scss` - header styles
        - `_reset.scss` - nullable browser styles
        - `_config.scss` - styles for individual interface elements and OOCSS methodology
        - `style.scss` - main stylesheet, includes css variables and imports of all stylesheets
    - `_footer.html` - page footer
    - `_header.html` - page header
    - `_scripts.html` - connection of site scripts
    - `_head.html` - connection of the site header, includes meta tags, the page title and the connection of styles
    - `index.html` - main html file, includes other html files
 
- `dist/`
    - `fonts/` - ttf -> woff/woff2
    - `img` - optimize images (WEBP, ImageMin)
    - `css/`
        - `style.css` - final css file 
        - `style.min.css` - final minified css file 
    - `js/`
        - `main.js` - final js file 
        - `main.min.js` - final js minified file
    - `index.html` - final html minified file


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
 - Sticky footer and aside using grids (***src/scss/config.scss***)                                    
  
  ![screenshot](https://i.ibb.co/CzHwRM6/image-2021-04-04-01-13-55-2.png)
  - Automatic deletion of comments (html only for now)
## Authors 

 - [**Karvackyy Roma**](https://github.com/Karvacky-Roma)

## Contributions
 
If you find a bug/error send pull requests or report [here](https://github.com/Karvacky-Roma/Gulp-build/issues)

## License 

Licensed under [MIT License](https://github.com/Karvacky-Roma/gulp-build/blob/master/LICENSE)
