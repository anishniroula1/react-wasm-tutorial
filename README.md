## Make sure you have Rust downloaded in your machine
1. If rust is not downloaded in your machine, use this command in your terminal:    
    ```curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh```
2. Create a new library in your react prject by - ```cargo init --name <NameOfTheProject> --lib```
3. Once you have the Wasm prject set up:
- Go to your <WasmProject>
- Build your wasm project: ```wasm-pack build --target web --out-dir pkg```
- Once you have pkg folder created, now you need to deploy this package to either github creating ```tgz file``` with(```npm pack```) command or deploy to npm module.
- To deploy in NPM, register as user in NPM website.
- Come Back to pkg folder (make sure you have package.json file)
- In the terminal of pkg directory: ```npm init```
- Provide the questions answer asked by npm.
- Once everything is done and you have nice looking package.json
- do ```npm publish```

note: next time when you add more stuff to wasm project, you will need to buld the wasm project and go to pkg file and just do ```npm publish``` to push it to the npm
***
3. Go to your react project package json and add the recently created wasp npm package in the dependencies.
- do ```npm install <package name>```
- ```npm run start```
