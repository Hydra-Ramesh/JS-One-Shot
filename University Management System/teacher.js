class Teacher{
    constructor(id, name, age, gender, employeeId, department){
        this.id=id;
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.employeeId=employeeId;
        this.department=department;
        this.courses=[];
    }
    display(){
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Employee ID: ${this.employeeId}`);
        console.log(`Department: ${this.department}`);
        console.log(`Courses: ${this.courses.length}`);
        console.log("Courses assigned to this teacher:");
        this.courses.forEach(course => {
            console.log(`- ${course.name}`);
        });
    }
    assignCourse(course){
        const existingCourse=this.courses.some(c=>c===course);
        if(existingCourse){
            console.log("Course already assigned to this teacher.");
            return false;
        }
        this.courses.push(course);
        console.log("Course assigned successfully!");
        return true;
    }
    removeCourse(courseId){
        const index=this.courses.findIndex(c=>c.id===courseId);
        if(index===-1){
            console.log("Course not found.");
            return false;
        }
        this.courses.splice(index,1);
        console.log("Course removed successfully!");
        return true;
    }
    viewCourses(){
        if(this.courses.length===0){
            console.log("No courses assigned to this teacher.");
            return;
        }
        console.log("Courses assigned to this teacher:");
        this.courses.forEach(course => {
            console.log(`- ${course.name}`);
        });
    }
}
module.exports=Teacher;