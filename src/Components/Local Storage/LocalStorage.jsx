const employees = [
    {
      id: 1,
      firstName: "M.Talha",
      email: "employee@example.com",
      password: "123",
      btnReply:[],
      adminmsg:[],
      taskmsg :[],
      taskCounts: {
        "active":1,
        "newTask":1,
        "completed":2,
        "failed":0,

      },
      tasks: [
        { 
          taskTitle: "Excel File", 
          taskDescription: "Complete the project report as soon as it possible and document all of your work in a Sheet (excel sheet).Also meet me in office now..", 
          taskCategory: "Documentation", 
          taskDate: "2024-12-05", 
        


          active: false, 
          failed: false, 
          completed: false, 
          newTask: true 
        },
        { 
          taskTitle: "Debugging", 
          taskDescription: "Fix bugs in the application,as you are already aware of your last mistake?Fix it and also come and tell me the reason why I not suspend you..", 
          taskCategory: "Development", 
          taskDate: "2024-12-06", 
          active: false, 
          failed: false, 
          completed: true, 
          newTask: false 
        },
        { 
          taskTitle: "Presentation Slides", 
          taskDescription: "Prepare presentation slides,have you prepared the presentation slides.?We just have been a meeting in less than 10minutes?", 
          taskCategory: "Design", 
          taskDate: "2024-12-07", 
          active: false, 
          failed: true, 
          completed: false, 
          newTask: false 
        }
      ]
    },
    {
      id: 2,
      firstName: "Mehwish Sattar!",
      email: "employee2@example.com",
      password: "123",
      btnReply:[],
      adminmsg:[],
      taskmsg :[],
      taskCounts: {
        "active":0,
        "newTask":5,
        "completed":2,
        "failed":0,

      },
      tasks: [
        { 
          taskTitle: "You are the Boss", 
          taskDescription: "Conduct team meeting,yes you have to conduct the team meeting and document all of your learnings as well as experience with new clients.Also let me know about their feedback about our company", 
          taskCategory: "Meeting", 
          taskDate: "2024-12-05", 
         
          active: false, 
          failed: false, 
          completed: false, 
          newTask: true 
        },
        { 
          taskTitle: "Task 2", 
          taskDescription: "Test new features", 
          taskCategory: "Testing", 
          taskDate: "2024-12-06", 
          
          active: false, 
          failed: false, 
          completed: true, 
          newTask: false 
        }
      ]
    },
    {
      id: 3,
      firstName: "Sobia Sattar",
      email: "employee3@example.com",
      password: "123",
      btnReply:[],
      adminmsg:[],
      taskmsg :[],
      taskCounts: {
        "active":3,
        "newTask":8,
        "completed":1,
        "failed":9,

      },
      tasks: [
        { 
          taskTitle: "Documentation", 
          taskDescription: "Write user documentation,I believe you are coming upto my expectations,last day I assigned you a task of  documentation?Does it sounds good?", 
          taskCategory: "Documentation", 
          taskDate: "2024-12-08", 
         
          active: false, 
          failed: true, 
          completed: false, 
          newTask: true 
        },
        { 
          taskTitle: "Update the UI design", 
          taskDescription: "Have you updated the UI? You have just two days and within two days, I need the UI Completed.Also make me aware of the live changes in UI", 
          taskCategory: "Design", 
          taskDate: "2024-12-09", 
        
          active: false, 
          failed: false, 
          completed: false, 
          newTask: true 
        },
        { 
          taskTitle: "Code Optimization", 
          taskDescription: "Have you optimized your code performance??As you know well, redendency in any code is bullshit spot?An expert Programmer always focus on clean code.. ", 
          taskCategory: "Development", 
          taskDate: "2024-12-10", 
        
          active: false, 
          failed: false, 
          completed: true, 
          newTask: false 
        }
      ]
    },
    {
      id: 4,
      firstName: "Abdul  Sattar",
      email: "employee4@example.com",
      password: "123",
      btnReply:[],
      adminmsg:[],
      taskmsg :[],
      taskCounts: {
        "active":4,
        "newTask":8,
        "completed":3,
        "failed":4,

      },
      tasks: [
        { 
          taskTitle: "Scheduled Demployment", 
          taskDescription: "As you know that we just have been a meeting at Hotel, reach there immediately", 
          taskCategory: "Meeting", 
          taskDate: "2024-12-11", 
        
          active: false, 
          failed: false, 
          completed: false, 
          newTask: true 
        }
      ]
    },
    {
      id: 5,
      firstName: "Ayesha Sattar",
      email: "employee5@example.com",
      password: "123",
      btnReply:[],
      adminmsg:[],
      taskmsg :[],
      taskCounts: {
        "active":5,
        "newTask":8,
        "completed":1,
        "failed":9,

      },
      tasks: [
        { 
          taskTitle: "Data Analyzation", 
          taskDescription: "You need to anylyze the data of 100 People.", 
          taskCategory: "Testing", 
          taskDate: "2024-12-12", 
        
          active: false, 
          failed: false, 
          completed: true, 
          newTask: false 
        },
        { 
          taskTitle: "Coding Notes", 
          taskDescription: "Prepare code review notes, I believe all of the notes have been reviewed yet, as in the night I am going to record a youtube video and I need those(reviewed notes) beofer deatline..", 
          taskCategory: "Docuementation", 
          taskDate: "2024-12-13", 
         
          active: false, 
          failed: false, 
          completed: false, 
          newTask: true 
        }
      ]
    }
  ];
 
export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
}
export const getLocalStorage=()=>{
    let employees=JSON.parse(localStorage.getItem("employees"));
    return{employees}
}