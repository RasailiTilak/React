// function Button() {
// // for the inline css
//     return (
//         <button className="button">Click me</button>
//     );
// }

// export default Button;


function Button() {
    const styles = {
        //NOTE:- while using CSS with in the javaScript Becare ful "CamelCase", and single 'quation'.
        // hue, saturation, light
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }
    // use the dynamic value (class name will be give unique if you insepect inthe web page)
    return (

        <button style={styles}> Click me  </button>
    );
}
export default Button




