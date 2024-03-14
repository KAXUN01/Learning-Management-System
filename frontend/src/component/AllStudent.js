import React, {useState, useEffect} from "react";
import axios from "axios";
import './AllStudent.css';

export default function AllStudent(){

    const [student, setStudent] = useState([]);

    useEffect (() =>{
        function getStudent(){
            axios.get("http://localhost:8000/student/")
            .then((res) =>{
                setStudent(res.data);

            }).catch((err) =>{
                alert(err.message);
            })
        } 
        getStudent();

    }, [])

    return(
        <div className="container">
            <h1>All Students</h1>
            {student.map((student, index) => (
                <div className="student-container" key={index}>
                <h2>{student.name}</h2>
                <p>Age: {student.age}</p>
                <p>Gender: {student.gender}</p>
        </div>
    ))}
</div>
    )
}