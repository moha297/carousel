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

## Testing

Running `grunt test` will run the unit tests with karma.


##Improvements possible
- The gallery can be further made Responsive by adding dynamic font resizing
and changing the header sizes as well.
- The images are leveraging object-fit:cover to prevent the aspect-ratio causing
bad user experience. If different image for few aspect ratio's are available we can improve things more

##Note
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.
