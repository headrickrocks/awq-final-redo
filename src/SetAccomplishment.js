import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { UpdateAccomplishment } from "./ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { Accomplishment } from "./models";
import { useState, useEffect } from "react";
import "./App.css";

class SetAccomplishment extends Component {
    render(){
        return (<PutCar />);
    }
}

  function PutCar() {
    const { cid } = useParams();
    const [cr, updateAccomplishment] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const cars = await DataStore.query(Accomplishment, c => c.id("eq", cid));
        console.log(cars);
        updateAccomplishment(cars[0]);
        console.log(cars[0].title);
        }
        pullData()
      }, []) 
      return (
        <div><p>{cid}</p>
          <UpdateAccomplishment accomplishment={cr}/>
        </div>
      );
    }

export default SetAccomplishment