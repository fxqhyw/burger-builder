import React, { Component } from 'react';
import Aaux from '../../hoc/Aaux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 0            
        }
    }

    render () {
        return (
            <Aaux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aaux>
        );
    }
}

export default BurgerBuilder;