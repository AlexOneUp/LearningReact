import React, { Component } from 'react';
import './Pokecard.css';
import './Pokedex.css';
import Pokecard from './Pokecard';


class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner"> Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser"> Losing Hand</h1>
            
        }
        return (
            <div className="Pokedex">
                <h4>Total Exp : {this.props.exp}</h4>
                {title}

                <div className="Pokedex-cards">
                    {this.props.pokemon.map((poke) => (
                        <Pokecard id={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}
export default Pokedex;