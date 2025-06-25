import React from 'react';
import '../css/Crear.css';

export default class Crear extends React.Component{
    state={
        title:"",
        descrip:"",
        img:"",
        video:"",
        color:"",
    }
    handleSubmit=e=>{
        e.preventDefault()
        console.log(this.state)
    }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render (){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.title} name="title" type="text" placeholder="Titulo"/>
                <input onChange={this.handleChange} value={this.state.descrip} name="descrip" type="text" placeholder="Descripcion"/>
                <input onChange={this.handleChange} value={this.state.img} name="img" type="text" placeholder="Imagen"/>
                <input onChange={this.handleChange} value={this.state.video} name="video" type="text" placeholder="Video"/>
                <input onChange={this.handleChange} value={this.state.color} name="color" type="text" placeholder="Color"/>
                <button type="submit">Enviar</button>
            </form>
            </>
        )
    }
}