const router = require("express").Router();
let student = require("../models/student.js");

router.route("/add").post((req,res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const gender = req.body.gender || ""; // Add default value for gender

  if (!name || !age || !gender) {
    // Return an error if any required fields are missing
    return res.status(400).send({ error: "Missing required fields" });
  }

  const newStudent = new student({
      name,
      age,
      gender
  })

  newStudent.save().then(() => {
      res.json("Student added")
  }).catch((err) => {
      console.log(err);
      res.status(500).send({ error: "Error adding student" });
  })
})

// ... other routes omitted for brevity
router.route("/").get((req,res) => {
    student.find().then((student) =>{
        res.json(student)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
    let userId = req.params.id;
    const {name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await student.findByIdAndUpdate(userId, updateStudent)
    .then(() => {
        res.status(200).send({status : "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status :"Error with updating data"});
    })
})

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await student.findByIdAndDelete(userId)
        .then(() =>{
            res.status(200).send({status: "User deleted"});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete user"});
        })
})

router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;

    await student.findById(userId)
        .then(student => {
            res.status(200).send({status: "User fetched", student});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
})

module.exports = router;