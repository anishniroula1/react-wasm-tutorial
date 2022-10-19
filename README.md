## Make sure you have Rust downloaded in your machine
1. If rust is not downloaded in your machine, use this command in your terminal:    
    ```curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh```

2. Once you have rust in your machine run the following command from this project directory:
- ```npm install```
- ``` npm run start```

3. ```npm run start ``` also builds the wasm project and generate the depedencies in the package.json file
4. If you decided to add extra code or functionality in the wasp project, you will need to build the wasm project again to show the result in the package.
- ```npm run build:wasm```