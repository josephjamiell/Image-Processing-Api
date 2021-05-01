
# Image Processing Api

A simple image processing api for resizing images,

## Folder Structure

```bash
├── images
│   ├── cached
│   └── original
│       ├── encenadaport.jpg
│       ├── fjord.jpg
│       ├── icelandwaterfall.jpg
│       ├── palmtunnel.jpg
│       └── santamonica.jpg
├── package-lock.json
├── package.json
├── readme.md
├── spec
│   └── support
│       └── jasmine.json
├── src
│   ├── index.ts
│   ├── routes
│   │   ├── api
│   │   │   └── images.ts
│   │   └── index.ts
│   ├── tests
│   │   ├── helpers
│   │   │   └── reporter.ts
│   │   ├── imageprocessorSpec.ts
│   │   └── indexSpec.ts
│   └── utilities
│       └── imageprocessor.ts
└── tsconfig.json
```

## Installation

Run npm installer to install application dependencies

```bash
npm install
```

## Endpoints

### Get 
* localhost:3000/images

## Available Images
* encenadaport.jpg
* fjord.jpg
* icelandwaterfall.jpg
* palmtunnel.jpg
* santamonica.jpg

## Usage

```bash
npm run start # starts servers on localhost:3000
```
Once the server has successfully started, you can make calls to the images endpoint. For example:

```bash
http://localhost:3000/images?name=fjord&height=250&width=250
```

This will return the chosen image resized based on the values provided for the height and width parameters.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[ISC](https://opensource.org/licenses/ISC)
