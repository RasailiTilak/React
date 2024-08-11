# react

## Class 01

### intorduction

- javascript library (not framework)
- used for building user interfaces
- components
- jsx(javascript xml)
- virutal DOM

#### prerequisit

- knowledge of html and css
- knowledge of javascript

### introduction

- node

### installation

- download and install nodejs (backend runtime env for js)
- vs code community version

### new project

- make folder

#### open terminal in vscode

- npm create vite@latest(check the vite doc)
- project name
- select JS
- cd my-react- app
- npm install
- npm run dev(to start development server)

### how to restart dev server

- npm run dev

### project folder explanation

- mode_modules(external library and packages that out project relies on)
- public (public assets, _fonts, videos etc_)
- src (source folder)
  - assets(contain _photos,videos as like the public_)
  - #App.css
  - App.jsx
  - index.css
  - main.jsx
  -
- index.html(_this is the main entry point of our program_)

- package.json
  - contain the metadata for our project

### App component

- delect all inside the app()
```
function App(){
    return ();
}
export default App
```
- delect app.css

#### within the source folder and creae components (Header,Footer)
- **Note:** make sure that name of componests must be start with capital letter 



### new Header component

- Header.jsx(create )(_fuction base components_)

```
function Header(){
    // here we can write html and jsx
    return(
        // here we can write the pure HTML, only we can return the single element so that we have to use the **<></>**
        <header>
        <h1> My website </h1>
        <nav>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
        </nav>
        <hr></hr>

        </header>


    );

}
export default Header;
```
- IF you delete all the styles from index.css Html with no css

- go the App.jsx import the header component
```
import Header from './Header.jsx'
function App(){
    return (
        // Here now we can add the header componets
        //only we can return the single element so that we have to use the **<></>**
        

        <Header ><Header/>
        or 
        <Header/>


    );
}
export default App
```


### new Footer component
- go to the source folder and crate component **Footer.jsx**
-  lets create function based components
```
function Footer (){
    return (
        // here we can write the pure HTML
        <footer>
        ** to use the javascript here in retun statement we need to set the curley braces**
        <p> &copy; {new Date().getFullYear()}2023 My website</p>
        </footer>
        
        
            );

}
export default Footer 
```
- Now lets add the footer componets in the App.jsx
```
import Header from './Header.jsx'
import Footer from './Footer.jsx'
function App(){
    // here you can write JS code without {} but in the return part we need.
    return (
        // Here now we can add the header componets
        //jsx elements must be wrapped in the inclosing tag. did you want a jsx fragment **<>...</>**
        <>

        <Header ></Header>
        <Footer></Footer 
        </>
        or 
        <>
        <Header/>
        <Footer/>

        </>


    );
}
export default App
```
### new Food component
- function based components
```
function Food(){
    const food1= "orange";
    const food2= "apple";
    return (
        // here we can write the pure HTML
        <ul>
        <li> {food1} </li>
        <li> {food2.toUpperCase()} </li>
        <li>banana</>
        </ul>
    );

}
export default Food
```
- Now lets add the Food componets in the App.jsx
```
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App(){
    // here you can write JS code without {} but in the return part we need.
    return (
        // Here now we can add the header componets
        //jsx elements must be wrapped in the inclosing tag. did you want a jsx fragment **<>...</>**
        <>

        //<Header ></Header>
        //<Footer></Footer 
        </>
        or 
        <>
        <Header/>
        <Food/>
        //lets reuse the food components 
        <Food/>
        <Food/>
        <Footer/>       

        </>


    );
}
export default App
```

### conclusion
- React:
    - React is all about reusing the components 
- component is the small section of the code that will include **JavaScript and HTML(.jsx)**, function will return that code and make reuse able.
