# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

學習資源來自：[高效 Coding 術：Angular Schematics 實戰三十天 系列](https://ithelp.ithome.com.tw/users/20090728/ironman/2149)

#### day 5
```bash
schematics .:test-schematics
schematics .:test-schematics --name=given-name
```

#### day 4
```bash
npm test
```

#### day 3
```bash
npm install -g @angular-devkit/schematics-cli

npm run build
schematics .:test-schematics --name={fileName}
schematics .:test-schematics --name=hilda --dry-run=false
```


### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
