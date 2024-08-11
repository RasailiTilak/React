function Food() {
    const food1 = "orange";
    const food2 = "apple";
    return (
        // here we can write the pure HTML
        <ul>
            <li> {food1} </li>
            <li> {food2.toUpperCase()} </li>
            <li>banana</li>
        </ul>
    );

}
export default Food