import { useState } from "react";
import {useForm} from "react-hook-form"
import axios from "axios"
import FormData from 'form-data';

export default function Ajout() {
    const {  handleSubmit } = useForm();
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    const onHandle = async() =>{
        var bodyFormData = new FormData();
        bodyFormData.append('title', title);
        bodyFormData.append('details', details); 
        
        axios({
          method: "post",
          url: "http://localhost:8000/addData",
          data: bodyFormData,
        }).then(function (response) {
            console.log(response);
          }).catch(function () {
            console.log("Error");
          });
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onHandle)}>
        <input
          type="text"
          placeholder="Name"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <textarea 
         cols="30"
          rows="10"
          value={details}
          onChange={(e)=> setDetails(e.target.value)}>
          </textarea>
        <input type="submit" value="creer" />

      </form>
    </div>
  );
}