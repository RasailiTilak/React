# class 03
HOW TO SYTLE REACT COMPONENTS WITH CSS
(not including external framework or preprocessors)
1. External 
2. Modules
3. Inline

- New Components Button.jsx

```
function Button(){
    return 
    (
        <button className="button"> Click me  </button>
        );
        }
export default Button

```

- in the App.jsx component


```
function App(){
    return(
       <Button/>
        );
}
export default App

```
## External (lage application don't use thhis methos )
- in the index.css
```
.button{
    background-color: hsl(200, 100%, 50%);// hue, saturation, light
    color: whit;
    padding: 10px 20px;
    border-radious: 5px;
    border: none;
    cursor:pointer;
}

```
## Modules 
- develop dedicated stylesheet for each component 
- first **create folde**
- button/
    - Button.jsx
    ```
        import styles from './Button.module.css'

        function Button(){
            return 
            (
                // use the dynamic value (class name will be give unique if you insepect inthe web)
                <button className={styles.button}> Click me  </button>
                );
                }
        export default Button


    ```
    - Button.module.css
        ```
            .button{
                background-color: hsl(200, 100%, 50%);// hue, saturation, light
                color: whit;
                padding: 10px 20px;
                border-radious: 5px;
                border: none;
                cursor:pointer;
            }

        ```
## Inline css
- use the style attribute to define the styles for the component
- Button.jsx
    ```
      

        function Button(){

            const styles={
                background-color: hsl(200, 100%, 50%);// hue, saturation, light
                color: whit;
                padding: 10px 20px;
                border-radious: 5px;
                border: none;
                cursor:pointer;
            }
            return 
            (
                // use the dynamic value (class name will be give unique if you insepect inthe web)
                <button style={styles}> Click me  </button>
                );
                }
        export default Button


    ```