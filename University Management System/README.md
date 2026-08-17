# University Management System

A professional JavaScript-based university administration project built with Object-Oriented Programming (OOP) principles in Node.js. This system models the core workflows of a university by managing students, teachers, courses, enrollment, teacher-course assignment, and department-wise academic operations.

This project is designed to showcase strong software design thinking, modular code organization, and practical application of class-based architecture in a real-world academic domain.

---

## Overview

The University Management System helps manage the daily operations of a campus by handling:

- Student registration and records
- Teacher information and assignment
- Course creation and capacity management
- Student enrollment to courses
- Course and department-based academic queries
- Teacher-to-course linkage and seat availability
- Updating, deleting, and searching academic records

The system is built to demonstrate how a real-world academic platform can be modeled using JavaScript classes and modular files.

---

## Why This Project Matters

This project is more than a basic classroom exercise. It demonstrates:

- Clean class-based architecture
- Separation of concerns across modules
- Realistic entity modeling
- Domain-driven design for academic systems
- Scalable code organization for future expansion
- Strong portfolio value for JavaScript and backend logic skills

It is an excellent example of how to model a business domain using object-oriented principles and keep logic structured, readable, and maintainable.

---

## Tech Stack

| Area | Technology |
|------|------------|
| Runtime | Node.js |
| Language | JavaScript |
| Programming Style | Object-Oriented Programming |
| Module System | CommonJS (`require` / `module.exports`) |
| Data Handling | In-memory arrays and objects |
| Execution | Console-based application |

### Core Technical Concepts Used

- Encapsulation through classes and properties
- Inheritance with `Person` and `Student`
- Composition between `Course`, `Teacher`, and `University`
- Static members like `Student.totalStudents`
- Business logic implementation inside domain classes
- Modular architecture using separate files

---

## Architecture

The application follows a modular, domain-focused architecture.

### High-Level Design

The system is organized around these core entities:

- `University` - root model that manages all academic data
- `Student` - represents a student profile and enrolled information
- `Teacher` - represents faculty and course assignments
- `Course` - represents an academic course with capacity and students
- `Person` - base class for common user identity attributes

### Relationship Model

- A `University` contains many `Student` objects
- A `University` contains many `Teacher` objects
- A `University` contains many `Course` objects
- A `Teacher` can be assigned to multiple `Course` instances
- A `Course` can have multiple enrolled `Student` objects
- A `Student` belongs to one department and may enroll in multiple courses

This creates a natural academic ecosystem similar to a university record system.

---

## Project Structure

```text
University Management System/
├── app.js                # Application entry point and demo workflow
├── person.js             # Base class for common user data
├── students.js           # Student model and student-specific logic
├── teacher.js            # Teacher model and course assignment methods
├── course.js             # Course model, capacity, and student enrollment logic
├── university.js         # Central system that manages academic operations
├── README.md             # Project documentation
└── ...
```

### File Responsibilities

#### `person.js`
Defines the `Person` base class with common attributes:

- `id`
- `name`
- `age`
- `gender`

This promotes code reuse and keeps the domain model consistent.

#### `students.js`
Defines the `Student` class, extending `Person`.

Responsibilities:

- Student-specific attributes such as `roll` and `department`
- Counting total students via static property
- Student display logic
- Student name validation through setter logic

#### `teacher.js`
Defines the `Teacher` class.

Responsibilities:

- Teacher identity and department information
- Course assignment management
- Displaying teacher details and assigned courses

#### `course.js`
Defines the `Course` class.

Responsibilities:

- Course code, name, credits, and capacity
- Teacher assignment to a course
- Enrolling and removing students
- Available seat calculation
- Viewing enrolled student details

#### `university.js`
Defines the `University` class.

Responsibilities:

- Managing all students, teachers, and courses
- Adding and removing entities
- Searching records by unique identifiers
- Viewing academic data
- Enrolling students in courses
- Assigning teachers to courses
- Department-wise student filtering

#### `app.js`
Acts as the application layer and demo runner.

Responsibilities:

- Creates sample student, teacher, and course objects
- Adds them to the university
- Assigns teachers to courses
- Enrolls students in classes
- Executes and demonstrates all major operations

---

## Core Workflow

The application follows a clear lifecycle for university administration:

### 1. University Setup
A new `University` object is created with a name like:

```javascript
const university = new University("Stanford University");
```

### 2. Create Students
Each student is created using the `Student` class with relevant data:

- ID
- Name
- Age
- Gender
- Roll number
- Department

### 3. Create Teachers
Teachers are created using the `Teacher` class with:

- ID
- Name
- Age
- Gender
- Employee ID
- Department

### 4. Create Courses
Courses are created with:

- Course ID
- Name
- Credits
- Capacity

### 5. Add Records to University
The university stores all records in arrays:

- `this.students`
- `this.teachers`
- `this.courses`

### 6. Assign Teachers to Courses
The `University` class calls `assignTeacherToCourse()` to associate a teacher with a course.

### 7. Enroll Students
Students are enrolled into courses if the course has capacity and the student is valid.

### 8. Query and Manage Data
The system supports operations like:

- Search student by roll number
- Search teacher by employee ID
- Search course by course code
- View all students/teachers/courses
- Filter students by department
- View course enrollment list
- Remove student from a course
- Delete a student or teacher

---

## Functional Features

### Student Management
- Add student
- View all students
- Search student by roll
- Delete student
- Update department information
- Count total students

### Teacher Management
- Add teacher
- View all teachers
- Search teacher by employee ID
- Delete teacher only if not assigned to active courses

### Course Management
- Add course
- View all courses
- Search course by course ID/code
- Assign a teacher
- Enroll students
- Remove students from a course
- Check available seats

### University Operations
- Centralized coordination of academic data
- Department filtering
- Academic record lookup
- Example-driven demo application flow

---

## Sample Runtime Flow

The project executes in `app.js` with a realistic academic scenario:

1. University is initialized
2. Students are added
3. Teachers are added
4. Courses are added
5. Teachers are assigned to courses
6. Students are enrolled into courses
7. Data is displayed to the console
8. Search and update operations are performed
9. Students are removed and counts are recalculated

This creates a complete end-to-end simulation of university administration in a console environment.

---

## How to Run the Project

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- A terminal or command prompt

### Step 1: Navigate to the Project Folder

```bash
cd "c:\Users\dasra\OneDrive\Desktop\JS-One Shot\University Management System"
```

Or in a PowerShell terminal:

```powershell
Set-Location "C:\Users\dasra\OneDrive\Desktop\JS-One Shot\University Management System"
```

### Step 2: Run the Application

```bash
node app.js
```

### Expected Behavior

When the code runs, it prints academic records and operations such as:

- all students
- all teachers
- all courses
- student search results
- teacher and course queries
- department-based filtering
- course enrollment listing
- available seats
- student count updates
- deletion and update tasks

This output is designed to demonstrate the complete lifecycle of the university management logic.

---

## Example Commands

```bash
node app.js
```

You can also run custom experiments by editing `app.js` or requiring the classes in a Node script.

---

## Design Strengths

This project stands out because it demonstrates practical software engineering concepts:

- Reusable base class design
- Object modeling of a business domain
- Clear separation of modules
- Easy extension for a larger enterprise solution
- Strong code readability for interviews and portfolio review

---

## Potential Improvements for Production Scale

Although this is a well-structured learning project, it can be evolved into a real production-grade system with the following improvements:

### 1. Database Integration
Replace in-memory arrays with:

- MongoDB
- MySQL
- PostgreSQL

### 2. REST API Layer
Build a backend with:

- Express.js
- Authentication and authorization
- Role-based access control

### 3. UI/Frontend
Add a dashboard using:

- React
- HTML/CSS/JavaScript
- Admin and student portals

### 4. Validation and Error Handling
Add:

- input validation
- duplicate checks
- error messages
- safer update logic

### 5. Security Enhancements
Introduce:

- encrypted passwords
- session management
- protected admin routes

### 6. Testing
Add unit tests with:

- Jest
- Mocha
- Chai

### 7. Logging and Monitoring
Use:

- Winston
- Morgan
- Cloud logging tools

---

## Project Impact

This project is a strong demonstration of:

- JavaScript fundamentals and OOP understanding
- Domain modeling skills
- Software architecture thinking
- Good file organization and maintainability
- Practical ability to build logic-driven systems

It is especially valuable for:

- JavaScript learning portfolios
- student projects
- backend logic demonstrations
- system design and OOP interviews

---

## Conclusion

The University Management System is a clean, structured academic management application built with JavaScript classes and modular architecture. It is ideal for showcasing OOP understanding, real-world entity modeling, and practical software design in a portfolio or academic assignment.

This project serves as a strong foundation for future expansion into a full-scale campus management application with database support, APIs, and a modern frontend.

---

## Author Note

This project is a learning-focused academic simulation designed to highlight programming structure, logic flow, and software architecture. It is an excellent example of how real business domains can be translated into object-oriented software.

If you want, this project can later evolve into a full-stack campus management platform with student dashboards, admin panels, database persistence, and modern web interfaces.
