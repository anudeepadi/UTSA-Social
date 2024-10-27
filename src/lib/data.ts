export const posts = [
    {
      id: 1,
      title: "RowdyHacks 2024 Registration Now Open!",
      content: "Join us for UTSA's premier hackathon! 24 hours of coding, learning, and fun. Over $5000 in prizes available. Sign up now to secure your spot and get early access to workshop materials.",
      author: "ACM UTSA",
      timestamp: "2 hours ago",
      likes: 145,
      comments: 32,
      image: "/images/hackathon.jpg"
    },
    {
      id: 2,
      title: "Study Group: CS 3443 - Application Programming",
      content: "Looking to form a study group for the upcoming midterm! We'll be meeting at JPL Library every Tuesday and Thursday from 5-7 PM. All skill levels welcome. Focus on Java and design patterns.",
      author: "John Doe",
      timestamp: "4 hours ago",
      likes: 67,
      comments: 23,
    },
    {
      id: 3,
      title: "UTSA Basketball vs Rice - Student Section Sold Out!",
      content: "Tonight's game is completely sold out! Thanks for the amazing support, Roadrunners! If you got tickets, arrive early to get the best seats. Wear orange and bring your loudest cheering voice! 🏀",
      author: "UTSA Athletics",
      timestamp: "6 hours ago",
      likes: 234,
      comments: 45,
      image: "/images/basketball.jpg"
    },
    {
      id: 4,
      title: "Career Fair Preparation Workshop",
      content: "Get ready for next week's career fair! Join us tomorrow for resume reviews, mock interviews, and professional headshots. Location: Student Union, Room 2.01.24. Time: 2-5 PM.",
      author: "Career Center",
      timestamp: "12 hours ago",
      likes: 89,
      comments: 15,
    }
  ];
  
  export const trendingTopics = [
    {
      id: 1,
      title: "RowdyHacks 2024",
      posts: 234,
      category: "Events",
      trending: true
    },
    {
      id: 2,
      title: "Spring Career Fair",
      posts: 189,
      category: "Career",
      trending: true
    },
    {
      id: 3,
      title: "Basketball Finals",
      posts: 156,
      category: "Sports",
      trending: true
    },
    {
      id: 4,
      title: "CS 3443 Study Group",
      posts: 98,
      category: "Academics",
      trending: true
    }
  ];
  
  export const stories = [
    {
      id: 1,
      user: "UTSA Athletics",
      image: "/stories/athletics.jpg",
      seen: false
    },
    {
      id: 2,
      user: "Student Success",
      image: "/stories/success.jpg",
      seen: false
    },
    {
      id: 3,
      user: "Career Center",
      image: "/stories/career.jpg",
      seen: true
    },
    {
      id: 4,
      user: "ACM UTSA",
      image: "/stories/acm.jpg",
      seen: false
    },
    {
      id: 5,
      user: "Library",
      image: "/stories/library.jpg",
      seen: true
    }
  ];
  
  export const upcomingEvents = [
    {
      id: 1,
      title: "RowdyHacks 2024",
      date: "Mar 15",
      time: "9:00 AM",
      location: "SU Ballroom",
      attendees: 234,
      category: "Technology"
    },
    {
      id: 2,
      title: "Spring Career Fair",
      date: "Mar 20",
      time: "10:00 AM",
      location: "Convocation Center",
      attendees: 156,
      category: "Career"
    },
    {
      id: 3,
      title: "Basketball vs Rice",
      date: "Mar 22",
      time: "7:00 PM",
      location: "Convocation Center",
      attendees: 890,
      category: "Sports"
    }
  ];

  export const messages = [
    {
      id: 1,
      from: "Study Group - CS 3443",
      content: "Meeting today at 5 PM in JPL",
      time: "10 mins ago",
      unread: true
    },
    {
      id: 2,
      from: "ACM UTSA",
      content: "Workshop materials are now available",
      time: "1 hour ago",
      unread: false
    },
    {
      id: 3,
      from: "Career Center",
      content: "Your mock interview is scheduled",
      time: "2 hours ago",
      unread: false
    }
  ];

  // Add this to your existing data.ts file
export const notifications = [
    {
      id: 1,
      title: "New Tech Talk Event",
      content: "Microsoft is hosting a tech talk next week",
      time: "1 hour ago",
      type: "event",
      unread: true
    },
    {
      id: 2,
      title: "Study Group Update",
      content: "Your CS 3443 study group has 3 new members",
      time: "2 hours ago",
      type: "group",
      unread: true
    },
    {
      id: 3,
      title: "Career Center",
      content: "Your resume has been reviewed",
      time: "1 day ago",
      type: "career",
      unread: false
    },
    {
      id: 4,
      title: "Basketball Game Tonight",
      content: "UTSA vs Rice - 7 PM at Convocation Center",
      time: "3 hours ago",
      type: "sports",
      unread: true
    }
  ];