# Here is how to render LISTS in React 
```
//List.jsx
function List(){
    //const fruits =["apple","banana","graps","mango"]
    const fruits = [{name:"apple", calories:95}, 
                    {name:"banana",calories:45}, 
                    {name:"graps", calories:105}, 
                    {name:"mango", calories:159}
                    ];
    fruits.sort();
    const listItems=fruits.map(fruit=> <li>key={fruit.nae}</li>);
    return(
        <!-- <ul> {listItems}</ul> -->
        <ol>{listItems} </ol>
        );
}
export default List

```

```
//App.jsx

import List from './List.jsx'
function App(){
    return(<list/>);
}
export default App
```