import React ,{Component}from "react"
import ReactDOM from "react-dom"
import data from "./data";
import ViewTemplate from "../template/view-template";

export  default  class Book extends Component{
    render(){
        return(
          <ViewTemplate data={data}/>
        )
    }
}