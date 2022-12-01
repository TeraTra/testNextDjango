import axios from "axios"
import { useState } from "react"
import { GetServerSideProps } from "next"
import { useForm } from "react-hook-form"
import FormData from "form-data"

export default function Update({data}: {data:Data}){
    const {handleSubmit} = useForm()
    const [title, setTitle] = useState(data.title)
    const [details, setDetails] = useState(data.details)

    const onHandle = () =>{
        let bodyFormData = new FormData()
        bodyFormData.append('title', title)
        bodyFormData.append('details', details)
        axios({
            method: "put",
            url:`http://localhost:8000/updateData/${data.id}`,
            data:bodyFormData
        }).then((res)=>{
            console.log(res)
        }).catch(()=>{
            console.log("ERROR")
        })
    }

    return(
        <section>
            <form onSubmit={handleSubmit(onHandle)}>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)} />
                <textarea 
                    cols="30"
                    rows="10"
                    onChange={(e)=>setDetails(e.target.value)}>{details}</textarea>
                <input type="submit" value="Modifier" />
            </form>
        </section>
    )       
}

type Data = {
    id: number
    title: string
    details: string
}

export const getServerSideProps: GetServerSideProps = async(context) =>{
    const {id} = context.query
    const res = await fetch(`http://localhost:8000/readData/${id}`)
    const data: Data = await res.json()
    return{props:{data}}
}