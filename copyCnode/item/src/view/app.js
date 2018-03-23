import React,{Component} from "react";
import  MainHeader from "./main-header";
import RouterIndex from "../router/router";
import MainFooter from "./main-footer";

export  default class App extends Component{
    render(){
        return(
            <div>
                <MainHeader/>
                <main className="main">
                      <RouterIndex/>
                </main>
                <MainFooter/>
            </div>
        )
    }
}