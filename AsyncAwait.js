// Normal Function
function getStudentDataFromAPI() {
  // Simulating API call with setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        // Normally we fetch this data from API and return it to the user
        name: "Ramesh Das",
        age: 22,
      });
    }, 5000);
  });
}

async function main() {
  try {
    console.log("Fetching Student Data from API...");
    const studentData = await getStudentDataFromAPI();
    console.log("Student Data:", studentData);
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
}

main();

// More function running in parallel

// More Promise
// Promise all
// Promise all settled
// Promise race
