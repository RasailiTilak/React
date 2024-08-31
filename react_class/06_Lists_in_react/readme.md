# Here is how to render LISTS in React 
```
//List.jsx
function List(){
    const fruits =["apple","banana","graps","mango"]
    const listItems=fruits.map(fruit=> <li>{fruit}</li>)
    return(<ul> {listItems}</ul>);
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