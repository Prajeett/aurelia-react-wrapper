# aurelia-react-wrapper

## Start dev web server

    npm install
    npm start

## Steps involved:

## 1. Created aurelia app
   npx makes aurelia

## 2. Installed Dependencies (need babel 7+)
>   npm install react react-dom
>   npm install --save-dev @types/react @types/react-dom
>   npm install @babel/preset-env @babel/preset-react --save-dev

## 3. Add extensions in modules.export  
>   resolve: {
>   extensions: ['.js', '.jsx', '.ts', '.tsx',]
>   }

## 4. Add rules in module
 >     {
 >         test: /\.(js|jsx)$/,
 >         exclude: /node_modules/,
 >         use: {
 >           loader: 'babel-loader',
 >           options: {
 >             presets: ['@babel/preset-env', '@babel/preset-react']
 >           }
 >         }
 >       }

## 5.  In Config file/compilerOptions
>     "jsx": "react"


## 6. Create a wrapper and render the react component in the aurelia view. 

## 7. Import the wrapper and register in your main or index file
> Example:    import { ReactWrapper } from './react-wrapper';
>            Aurelia
            .register(ReactWrapper) 
            .app(MyApp)
            .start();


