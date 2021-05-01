
# Image Processing Api

A simple image processing api for resizing images,

## Folder Structure

```bash
├── images
│   ├── encenadaport.jpg
│   ├── fjord.jpg
│   ├── icelandwaterfall.jpg
│   ├── palmtunnel.jpg
│   └── santamonica.jpg
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

## Dependencies & DevDependencies

```bash
"devDependencies": {
    "@types/eslint": "^7.2.10",
    "@types/express": "^4.17.11",
    "@types/jasmine": "^3.6.10",
    "@types/node": "^14.14.41",
    "@types/sharp": "^0.28.0",
    "@types/supertest": "^2.0.11",
    "@types/typescript": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^4.22.0",
    "@typescript-eslint/parser": "^4.22.0",
    "eslint": "^7.25.0",
    "eslint-config-prettier": "^8.3.0",
    "jasmine": "^3.7.0",
    "jasmine-spec-reporter": "^7.0.0",
    "nodemon": "^2.0.7",
    "prettier": "^2.2.1",
    "supertest": "^6.1.3",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4"
  },
  "dependencies": {
    "express": "^4.17.1",
    "sharp": "^0.28.1"
  }
```

## Installation

Run npm installer to install application dependencies & dev

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
