# carousel

##Pre-requisites
You need to have node.js, npm and bower on your computer.

## Installation
Clone the git repository on your system and navigate into the directory
Run the following command:
`
npm install
bower install
`
## Open the app in local environment
Run the following command:
`grunt serve`
This will launch the application in your browser.
You can access it using the following url as well:
`http://localhost:9000/#/`

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Assumptions and notes
- Flexibility was taken with respect to layout built. Inspiration was taken from example
provided
- The Carousel loads slides on demand into the slide reel instead of images inside slides.
This seems to be more scaleable and easy to leverage in all scenarios.
- No options were created for on demand loading as user interacts in the carousel. The same can be exposed as options for the directive too.



##Note
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.
