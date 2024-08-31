# conditonal rendering 
- conditional rendring allows you to control what gets reandred in your applicattion based on certain condition 
(we can do: show ,hide, or change components)

## app.jsx

```
import UserGreeting from './UserGreeting.jsx'
function App(){
    return(
        <>
        <UserGreetinggg isLoggedIN=(true) username="Tilak"/>

        </>
    );

}
export default App
```

## create the new components(UserGreeting.jsx)

- let's create the function based component

```
// if you are sendig something from one components to another you must have to use props object and that store there.

functiton UserGreeting (props){
    // when you return you exit
    // use the ternery operatore

    const welcomeMessage=<h2> welcome{props.username}</h2>
    const byeMessage=<h2>bye bye </h2>
    return(props.isLoggedIn? welcomeMessage:
    byeMessage);
    if (props.isLoggedIn){
        return  <h2>WelCome {props.username }</h2>
    }
    else{
        return <h2>please logged In first
    }


}
export default UserGreeting
// use here props types 
//default props



```