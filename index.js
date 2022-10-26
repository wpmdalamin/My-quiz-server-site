const express = require('express');
const app = express();
const cors = require('cors')
const courses = require('./data/courses.json');
const courses_details = require('./data/course-details.json')
const port = process.env.RORT || 5000;

app.use(cors())

app.get('/', (req, res)=> {
    res.send("hello world from server.")
})

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses-details', (req, res) => {
    res.send(courses_details);
})
app.get('/course/:id', (req, res) => {
    const course_id = parseInt(req.params.id);
    const course = courses.find(cr => cr.id == course_id) 
    res.send(course);
    console.log("course id", course_id);
})

app.get('/course-detail/:id', (req, res) => {
    const coursesDetails_id = req.params.id;

    const course_detail = courses_details.find(cr_detail => cr_detail._id == coursesDetails_id );
    res.send(course_detail);
    console.log("course_detail id", coursesDetails_id, "course title", course_detail.title);
})

app.listen(port, ()=>{
    console.log("node server is r...")
})