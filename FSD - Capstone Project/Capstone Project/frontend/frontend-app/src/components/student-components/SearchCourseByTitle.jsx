import { useState } from "react";
import { viewCourseByTitle } from "../../service/courseService";
function SearchCourseByTitle() {
let [course, setCourse] = useState(null);
let [title, setTitle] = useState("");
let [message,setMessage] = useState("");
let searchCourse = async () => {
    try {
        let result = await viewCourseByTitle(title);
        console.log("Course found:", result);
        if(result.success) {
        setCourse(result.data);
        setMessage("");
        }else {
            setCourse(null);
            setMessage(result.message);
        }
    }
    catch (error) {
        console.error("Error searching course:", error);
    }
}

    return(
        <>
        <h1>Search Course By Title</h1>
        <input type="text" placeholder="Enter course title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="button" value="Search" onClick={searchCourse} />
        {message && <p>{message}</p>}
        {course && (
            <div>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p>Instructor: {course.instructor}</p>
                <p>Duration: {course.duration}</p>
            </div>
        )}
        </>
    )
}

export default SearchCourseByTitle;