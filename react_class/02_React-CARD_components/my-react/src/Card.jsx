import profilePic from './assets/profile.png'
//function base component 
function Card() {
    return (
        // Note: in the React  'class' word is reserved so that to denote the 'class 'of the HTML we use 'className'
        <div className="card">
            <img className="card-image" src={profilePic} alt="image" />
            <h2 className="card-title">title</h2>
            <p className="card-text">description this is how we make vide </p>
        </div>
    );
}
export default Card
