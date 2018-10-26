import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ExchangeRates from './components/ExchangeRates';
import Dogs from './components/Dogs';
import DogPhoto from './components/DogPhoto';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const client = new ApolloClient({
    // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql" // ExchandeRates
    // uri: "https://nx9zvp49q7.lp.gql.zone/graphql" // Dogs
    uri: "https://8v9r9kpn7q.lp.gql.zone/graphql" // AddTodo
});

class App extends Component {
    state = { selectedDog: null };

    onDogSelected = ({ target }) => {
        this.setState(() => ({ selectedDog: target.value }));
    };

    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <h2>My first Apollo app 🚀</h2>
                    {/*
                    <ExchangeRates/>
                    {this.state.selectedDog && (
                        <DogPhoto breed={this.state.selectedDog} />
                    )}
                    <Dogs onDogSelected={this.onDogSelected}/>
                    */}
                    <AddTodo/>
                    <Todos/>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;