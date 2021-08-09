function ToyCard(props) {
    return (
        <div>
            <h1>Toy Name: {props.toy.name}</h1>
            <img src={props.toy.image}/>
            <p>Likes: {props.toy.likes}</p>
        </div>
    );
}

export default ToyCard;