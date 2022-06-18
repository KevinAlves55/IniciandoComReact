import React from "react";
import Post from "./Post";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hellow Word</h1>
                <Post title="Isso funciona mesmo?"/>
                <Post title="Olá mundo"/>
                <Post title="Estou aprendendo React"/>
            </div>
        );
    }
}