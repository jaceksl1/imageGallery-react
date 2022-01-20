# Pixabay Image Gallery - React & Tailwind CSS

Simple gallery with images from the pixabay API. Tailwind css is built into workflow with postcss and autoprefixer.

## Usage

Add your Pixabay API key to .env - https://pixabay.com/api/docs/

https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/

npm install tailwindcss postcss-cli autoprefixer@9.8.6 -D
npx tailwind init tailwind.js --full

touch postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
plugins: [
tailwindcss('./tailwind.js'),
require('autoprefixer')
],
};

main.css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

package.json
"scripts": {
"start": "npm run watch:css && react-scripts start",
"build": "npm run watch:css && react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
}
# imageGallery-react
