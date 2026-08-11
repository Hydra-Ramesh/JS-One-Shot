const Student = require('./students.js');
class University{
    constructor(name){
        this.name = name;
        this.students = [];
    }

    // Student Management
    addStudent(student){
        this.students.push(student);
        console.log("Student added successfully!");
    }
    viewStudents(){
        if(this.students.length === 0){
            console.log("No students found.");
            return;
        }
        for(let student of this.students){
            console.log("----------------------------------------------------------------------");
            student.display();
        }
    }
    searchStudent(roll){
        const student=this.students.find(s=>s.roll===roll);
        if(!student){
            console.log("Student not Found.");
            return;
        }
        student.display();
    }
    deleteStudent(roll){
        const index=this.students.findIndex(s=>s.roll===roll);
        if(index===-1){
            console.log("Student not Found.");
            return;
        }
        this.students.splice(index,1);
        console.log("Student deleted successfully!");
        Student.totalStudents--;

    }
    // We have to Update this function later based on {roll, newName, newAge, NewGender, newDepartment}
    updateStudent(roll, newDepartment){
        const student=this.students.find(s=>s.roll===roll);
        if(!student){
            console.log("Student not Found.");
            return;
        }
        student.department=newDepartment;
        console.log("Student department updated successfully!");
    }
    studentByDepartment(department){
        const list=this.students.filter(s=>s.department===department);
        if(list.length===0){
            console.log("No students found in this department.");
            return;
        }
        console.log(list);
    }



    // Teacher Management

    //1. Add teacher
    //2. View all teachers
    //3. Search teacher by employeeId
    //4. Delete teacher by employeeId



    // Course Management

    //1. Add course
    //2. View all courses
    //3. Search course by id
    //4. Delete course by id

    // Course Operations

    //1. Assign teacher to course
    //2. Enroll student in course
    //3. Remove student from course
    //4. View enrolled students in course



};


