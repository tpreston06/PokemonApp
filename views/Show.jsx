const React = required('react')
class Show extends React.Component {
    render() {
        const pokemon = this.props.fruit
        return(
            <div>
                <h1> Show Page </h1>
                    The {pokemon.name}
                    <br/>
                    <h4>Whatever</h4>
                    <a href="/pokemon">Back to Index</a>
            </div>
        )
    }
}
module.exports = Show