const React = required('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000'
  };
class Show extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return(
            <div>
                <h1> Gotta Catch Em All </h1>
                <h2> {pokemon.name} </h2>
                    <img src={pokemon.img}></img>
                    <a href="Index.jsx">Back to Index</a>
            </div>
        )
    }
}
module.exports = Show