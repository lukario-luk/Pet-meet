import React, {Component} from 'react'
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import catIcon from "./assets/cats-icon.png"
import dogIcon from "./assets/dogs-icon.jpeg"
const GlobalStyle = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Conteiner = styled.div`
  width:100%;
  height: 500px;
  display: flex;
  justify-content:center;
  background-color:#e1e5f2;

`
const BoxAdoptionDog = styled.div`
  max-width:200px;
  margin:2%;
  padding:2% 1%;
  border-radius:40px;
  box-shadow:0.3px 0.3px 10px 1.3px #c4dec8;
  display:flex; 
  align-items:center;
  flex-direction:column;
  background-color:#d8f3dc;


`
const BoxAdoptionCat = styled.div`
  max-width:200px;
  margin:2%;
  padding:2% 1%;
  border-radius:40px;
  box-shadow:0.3px 0.3px 10px 1.3px #c4dec8;
  display:flex; 
  align-items:center;
  flex-direction:column;
  background-color:#d8f3dc;
`
const BoxsImgs = styled.figure`
max-width:150px;
height:150px;
margin-bottom:3%;
border-radius:50%;
box-shadow: 0.5px 0.5px 5px 1px black;
position: relative;
background-color:#354f52;
img{
  width:99.4%;
  height:99.4%;
  border-radius:50%;
}
` 
const Click = styled.div`
  width:50%;
  padding:1.5% 0.5%;
  border-radius:10px;
  box-shadow: 1px 1px 3px 0.1px black;
  position:absolute;
  bottom:0.1%;
  right:25%;
  text-align:center;
  font-size:0.95em;
  background-color:#d58936;
  &:hover{
  cursor: pointer;
  font-weight:bolder;
  box-shadow:0px 0px 2px 1px #208b3a;
  transition: 0.35s ease all;
  
}
`
const AdoptionList = styled.div`
width:100%;
height:100%;
overflow:auto;
::-webkit-scrollbar {
  width: 10px;
  position: fixed;
}
::-webkit-scrollbar-track {
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  background-color: #00d3c7; 
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #0ea499; 
}
`
const LiName = styled.li`
width:90%;
margin:4%;
padding:3% 3% 3% 9% ;
border-radius:30px;
background-color:#74c69d;
list-style:none;
&:hover{
  cursor: pointer;
  font-weight:bolder;
  box-shadow:0px 0px 2px 1px #208b3a;
  transition: 0.35s ease all;
  
}
`
class App extends Component{
  state={ 
    petDogs:[
      {name:"Paçoca"},
      {name:"Amarelo"},
      {name:"Bela"},
      {name:"Bolinha"},
      {name:"Alfa"},
      {name:"Juba"},
      {name:"Filomena"},
    ],
    petCats:[
      {name:"Leitera"},
      {name:"Mingau"},
      {name:"Salsinha"},
      {name:"Pedrito"},
      {name:"Faísca"},
      {name:"Puffy"},
      {name:"Ron Ron"},
      {name:"Cascudo"},
      {name:"Pompom"},
    ],
    renderCatsNames:[],
    renderDogsNames:[],
   }

  appearDogsNames =()=>{
  this.setState({
    renderDogsNames: (this.state.renderDogsNames == "" ? this.state.petDogs.map(item => {return <LiName>{item.name}</LiName>}) : "")
  })
  }
  appearCatsNames =()=>{
    this.setState({
      renderCatsNames: (this.state.renderCatsNames == "" ? this.state.petCats.map(item => {return <LiName>{item.name}</LiName>}) : "")
    })
  }
  render(){
    return(
      
      <Conteiner>
        <GlobalStyle/>
      <BoxAdoptionCat>
      <BoxsImgs className="catImg">
        <img onClick={this.appearCatsNames} src={catIcon} alt="Desenho de cara de gato, usavel como botão"/>
      <Click onClick={this.appearCatsNames} >adoption</Click>
      </BoxsImgs>
      <AdoptionList> 
        {this.state.renderCatsNames}
      </AdoptionList>
      </BoxAdoptionCat>
      <BoxAdoptionDog>
      <BoxsImgs className="dogImg">
        <img onClick={this.appearDogsNames} src={dogIcon} alt="Desenho de cara de cachorro, usavel como botão"/>
        <Click onClick={this.appearDogsNames} >adoption</Click>
      </BoxsImgs>
      <AdoptionList>
        
        {this.state.renderDogsNames}

      </AdoptionList>
      </BoxAdoptionDog>

      </Conteiner>
    )
  }
  //na li troque addTarefa por id

}

export default App;