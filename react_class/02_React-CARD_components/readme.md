# class 02
## Card componensts
- poular with the react application,  they involve , picture , title and discription.you can use card for  all sorts of things.

## new componets Card.jsx
```
import profilePic from './assets/profile.jpg'
//function base component 
functio Card(){
    return (
        // Note: in the React  'class' word is reserved so that to denote the 'class 'of the HTML we use 'className'
        <div className="card">
        <img className ="card-image" src={profilePic} alt="image"/>
        <h2 className="card-title">title</h2>
        <p className ="card-text">description this is how we make vide </p>
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
    <>
    <Card></Card>
    <Card/>
    <Card/>
    <Card/>
    </>
);


}

export default Card
```
## for the css of he card
- index.css
- delete all and write the new one 
```
.card 
{
    border :1px solid hsl(0,0%, 80%);
    border-radius: 10px;
    box-shadow: 5px 5px 5px  hsla(0, 0%, 0%, 0.1);
    padding: 20px;
    margin: 10 px
    text-align: center;
    max-width:250px;
    display:inline-block;  

}

.card.card-image{
    max-width:60%;
    height:auto;
    border-radius:50%;
    margin-bottom:10px;

}
.card. car-title{
font-family:Arial, sans-serif;
margin:0;
color:hsl(0, 0%, 20%)

}
.card. card-text{
    font-family: Arial, sans-serif;
    color: hsl(0,0%, 30%);


}
```