const employees = [
  {
      "Id": 1,
      "firstName": "Arjun",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update Product Listings",
              "taskDescription": "Add new products and update prices for existing items.",
              "taskDate": "2024-11-08",
              "category": "E-commerce"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Fix Login Bug",
              "taskDescription": "Resolve login issue affecting some users.",
              "taskDate": "2024-11-07",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "Prepare Sales Report",
              "taskDescription": "Create a report for Q3 sales.",
              "taskDate": "2024-11-06",
              "category": "Finance"
          }
      ],
      "taskNumber": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "Id": 2,
      "firstName": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Design Homepage Banner",
              "taskDescription": "Create a new banner for the Black Friday sale.",
              "taskDate": "2024-11-08",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Email Marketing Campaign",
              "taskDescription": "Launch the holiday campaign email.",
              "taskDate": "2024-11-07",
              "category": "Marketing"
          }
      ],
      "taskNumber": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "Id": 3,
      "firstName": "Rahul",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Database Backup",
              "taskDescription": "Perform routine backup of the database.",
              "taskDate": "2024-11-05",
              "category": "IT"
          }
      ],
      "taskNumber": {
          "active": 0,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "Id": 4,
      "firstName": "Sneha",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Customer Feedback Analysis",
              "taskDescription": "Analyze feedback and prepare a summary report.",
              "taskDate": "2024-11-09",
              "category": "Customer Service"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Update Blog Posts",
              "taskDescription": "Revise old blog posts for SEO.",
              "taskDate": "2024-11-06",
              "category": "Content"
          }
      ],
      "taskNumber": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "Id": 5,
      "firstName": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Code Review",
              "taskDescription": "Review pull requests for the new feature.",
              "taskDate": "2024-11-08",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "System Testing",
              "taskDescription": "Test the new API endpoints.",
              "taskDate": "2024-11-06",
              "category": "Testing"
          }
      ],
      "taskNumber": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 1
      }
  }
];

const admin = [
  {
      "Id": 1,
      "firstName": "Admin",
      "email": "admin@me.com",
      "password": "123"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));

  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
