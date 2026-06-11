import { useEffect } from "react";
import { useState } from "react";
import { viewAllCourses } from "../../service/courseService";

function ViewAllCourseByStudent() {
let [courses, setCourses] = useState([]);

useEffect(() => {
    loadAllCourses();
}, []);

let loadAllCourses = async () => {
    try {
        let result = await viewAllCourses();
        console.log("All courses loaded:", result.data);
        setCourses(result.data);
    } catch (error) {
        console.error("Error loading all courses:", error);
    }
};

    return(
        <>
        <h1>View All Course By Student</h1>
        <table border={1}>
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Instructor</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => (
                    <tr key={course._id}>
                        <td>{course._id}</td>
                        <td>{course.title}</td>
                        <td>{course.description}</td>
                        <td>{course.instructor}</td>
                        <td>{course.duration}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default ViewAllCourseByStudent;