# class 02
## Card componensts
- poular with the react application,  they involve , picture , title and discription.you can use card for  all sorts of things.

## new componets Card.jsx
```
//function base component 
functio Card(){
    return (
        // Note: in the React  'class' word is reserved so that to denote the 'class 'of the HTML we use 'className'
        <div className="card">
        <img src="images.png" alt="image"/>
        <h2>title</h2>
        <p>description this is how we make vide </p>
        </div>

    );
}
export default Card

```



## in the App.jsx
```
import Card from './Card.jsx'
function App() {
return(
    <Card></Card>
);


}

export default Card
```
