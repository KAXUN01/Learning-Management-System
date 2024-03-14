import React,{useState} from "react";
import axios from "axios";
import './AddStudent.css';

export default function AddStudent(){

    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[gender, setGender] = useState("");

    function sendData(e){
        e.preventDefault();
    
        const newStudent ={
            name,
            age,
            gender
        }
        axios.post("http://localhost:8000/student/add", newStudent)
            .then(() => {
                alert("Student registered successfully")
            }).catch((err) => {
                alert(err)
            })
    }
    

    return(
        <form onSubmit={sendData}>
      <div className="container">
        <h1 className="text-center mb-4">User Information Form</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name"
                value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control" id="age" placeholder="Enter your age"
                min="1" max="120" value={age} onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>
    )
}
