'use client'

import { useState } from 'react'

const projectIdeas = [
  {
    title: "Personal Portfolio Website",
    difficulty: "Beginner",
    time: "4-6 hours",
    description: "Create a responsive portfolio showcasing your projects, skills, and contact information.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["About section", "Projects gallery", "Contact form", "Responsive design"],
    whyEffective: "Demonstrates front-end fundamentals and you can use it after the hackathon!"
  },
  {
    title: "To-Do List App",
    difficulty: "Beginner",
    time: "3-5 hours",
    description: "Build a task management app with add, edit, delete, and mark complete functionality.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    features: ["Add/remove tasks", "Mark as complete", "Filter tasks", "Data persistence"],
    whyEffective: "Covers CRUD operations and local data storage - key programming concepts."
  },
  {
    title: "Weather Dashboard",
    difficulty: "Beginner",
    time: "4-6 hours",
    description: "Display weather information for any city using a free weather API.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    features: ["City search", "Current weather display", "5-day forecast", "Weather icons"],
    whyEffective: "Learn API integration, a crucial skill for modern web development."
  },
  {
    title: "Quiz Game",
    difficulty: "Beginner",
    time: "4-5 hours",
    description: "Interactive quiz with multiple choice questions, scoring, and results.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Multiple questions", "Score tracking", "Timer", "Results page"],
    whyEffective: "Teaches logic, state management, and interactive UI design."
  },
  {
    title: "BMI Calculator",
    difficulty: "Beginner",
    time: "2-3 hours",
    description: "Calculate Body Mass Index with visual feedback and health recommendations.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Input validation", "BMI calculation", "Visual indicators", "Health tips"],
    whyEffective: "Simple logic with practical utility - easy to complete and demonstrate."
  },
  {
    title: "Expense Tracker",
    difficulty: "Beginner",
    time: "5-7 hours",
    description: "Track income and expenses with categories and visual summaries.",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
    features: ["Add transactions", "Categories", "Balance calculation", "Simple charts"],
    whyEffective: "Real-world application with data visualization - impressive to judges."
  },
  {
    title: "Recipe Finder",
    difficulty: "Beginner",
    time: "4-6 hours",
    description: "Search and display recipes using a free recipe API.",
    tech: ["HTML", "CSS", "JavaScript", "Recipe API"],
    features: ["Recipe search", "Ingredient list", "Cooking instructions", "Save favorites"],
    whyEffective: "API integration plus attractive visual design opportunities."
  },
  {
    title: "Countdown Timer",
    difficulty: "Beginner",
    time: "3-4 hours",
    description: "Customizable countdown timer for events with notifications.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Set custom dates", "Multiple timers", "Notifications", "Visual animations"],
    whyEffective: "Date/time manipulation and browser APIs - core JavaScript skills."
  },
  {
    title: "Markdown Note-Taking App",
    difficulty: "Beginner",
    time: "5-6 hours",
    description: "Simple note app with markdown support and local storage.",
    tech: ["HTML", "CSS", "JavaScript", "Markdown library"],
    features: ["Create/edit notes", "Markdown preview", "Search notes", "Export notes"],
    whyEffective: "Useful tool that showcases text processing and data management."
  },
  {
    title: "Random Quote Generator",
    difficulty: "Beginner",
    time: "2-3 hours",
    description: "Display random inspirational quotes with sharing capabilities.",
    tech: ["HTML", "CSS", "JavaScript", "Quotes API"],
    features: ["Random quotes", "Category filter", "Tweet quote", "Copy to clipboard"],
    whyEffective: "Quick to build, visually appealing, easy to make unique with design."
  },
  {
    title: "Color Palette Generator",
    difficulty: "Beginner",
    time: "3-4 hours",
    description: "Generate and save color schemes for design projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Random palettes", "Copy hex codes", "Lock colors", "Save favorites"],
    whyEffective: "Useful for designers, teaches color manipulation and UI/UX."
  },
  {
    title: "Pomodoro Timer",
    difficulty: "Beginner",
    time: "3-4 hours",
    description: "Productivity timer using the Pomodoro Technique.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["25-min work / 5-min break", "Customizable intervals", "Session counter", "Notifications"],
    whyEffective: "Simple concept with clear utility - relatable to students and developers."
  }
]

const categories = ["All", "Quick Build (2-4h)", "Standard (4-6h)", "Extended (6-8h)"]

export default function Home() {
  const [selectedIdea, setSelectedIdea] = useState(null)
  const [filter, setFilter] = useState("All")
  const [showRandom, setShowRandom] = useState(false)

  const getRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * projectIdeas.length)
    setSelectedIdea(projectIdeas[randomIndex])
    setShowRandom(true)
    setTimeout(() => setShowRandom(false), 500)
  }

  const getFilteredIdeas = () => {
    if (filter === "All") return projectIdeas
    if (filter === "Quick Build (2-4h)") return projectIdeas.filter(idea => {
      const hours = parseInt(idea.time)
      return hours <= 4
    })
    if (filter === "Standard (4-6h)") return projectIdeas.filter(idea => {
      const hours = parseInt(idea.time)
      return hours > 4 && hours <= 6
    })
    if (filter === "Extended (6-8h)") return projectIdeas.filter(idea => {
      const hours = parseInt(idea.time)
      return hours > 6
    })
    return projectIdeas
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🚀 Hackathon Ideas for Beginners
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Effective project ideas that you can build and win!
          </p>
        </header>

        {/* Random Generator Button */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <button
            onClick={getRandomIdea}
            style={{
              background: showRandom ? '#48bb78' : '#fff',
              color: showRandom ? '#fff' : '#667eea',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.2rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transform: showRandom ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            🎲 Generate Random Idea
          </button>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? '#fff' : 'rgba(255,255,255,0.2)',
                color: filter === cat ? '#667eea' : '#fff',
                border: '2px solid white',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: filter === cat ? 'bold' : 'normal',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Selected Idea Highlight */}
        {selectedIdea && (
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            marginBottom: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '4px solid #48bb78'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '15px'
            }}>
              <h2 style={{
                color: '#2d3748',
                margin: 0,
                fontSize: '2rem'
              }}>
                ⭐ {selectedIdea.title}
              </h2>
              <span style={{
                background: '#48bb78',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                {selectedIdea.time}
              </span>
            </div>

            <p style={{
              color: '#4a5568',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              {selectedIdea.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div>
                <h4 style={{ color: '#2d3748', marginBottom: '10px' }}>🛠️ Technologies:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedIdea.tech.map(tech => (
                    <span key={tech} style={{
                      background: '#e6fffa',
                      color: '#234e52',
                      padding: '5px 12px',
                      borderRadius: '12px',
                      fontSize: '0.9rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ color: '#2d3748', marginBottom: '10px' }}>✨ Key Features:</h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4a5568' }}>
                  {selectedIdea.features.map(feature => (
                    <li key={feature} style={{ marginBottom: '5px' }}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{
              background: '#f7fafc',
              padding: '15px',
              borderRadius: '10px',
              borderLeft: '4px solid #667eea'
            }}>
              <strong style={{ color: '#2d3748' }}>💡 Why This Is Effective:</strong>
              <p style={{ margin: '5px 0 0 0', color: '#4a5568' }}>
                {selectedIdea.whyEffective}
              </p>
            </div>
          </div>
        )}

        {/* All Ideas Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '20px'
        }}>
          {getFilteredIdeas().map((idea, index) => (
            <div
              key={index}
              onClick={() => setSelectedIdea(idea)}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: selectedIdea === idea ? '3px solid #48bb78' : '3px solid transparent'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <h3 style={{
                  color: '#2d3748',
                  margin: 0,
                  fontSize: '1.4rem'
                }}>
                  {idea.title}
                </h3>
                <span style={{
                  background: '#edf2f7',
                  color: '#2d3748',
                  padding: '4px 10px',
                  borderRadius: '15px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap'
                }}>
                  ⏱️ {idea.time}
                </span>
              </div>

              <p style={{
                color: '#718096',
                fontSize: '1rem',
                lineHeight: '1.5',
                marginBottom: '15px'
              }}>
                {idea.description}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '10px'
              }}>
                {idea.tech.slice(0, 3).map(tech => (
                  <span key={tech} style={{
                    background: '#f0f4ff',
                    color: '#5a67d8',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    fontSize: '0.85rem'
                  }}>
                    {tech}
                  </span>
                ))}
                {idea.tech.length > 3 && (
                  <span style={{
                    color: '#a0aec0',
                    padding: '4px 10px',
                    fontSize: '0.85rem'
                  }}>
                    +{idea.tech.length - 3} more
                  </span>
                )}
              </div>

              <div style={{
                fontSize: '0.9rem',
                color: '#48bb78',
                fontWeight: '500',
                marginTop: '10px'
              }}>
                Click to see full details →
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '40px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{
            color: '#2d3748',
            marginBottom: '20px',
            fontSize: '1.8rem'
          }}>
            🎯 Tips for Hackathon Success
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { icon: '✅', title: 'Start Simple', text: 'Pick a project you can finish. Better to have a complete simple app than an incomplete complex one.' },
              { icon: '🎨', title: 'Focus on UI', text: 'A clean, attractive interface makes a strong impression on judges, even for simple functionality.' },
              { icon: '📱', title: 'Make it Responsive', text: 'Ensure your project works on mobile. Judges often test on their phones.' },
              { icon: '🚀', title: 'Deploy It', text: 'Have a live link ready. Use free platforms like Vercel, Netlify, or GitHub Pages.' },
              { icon: '📝', title: 'Document Well', text: 'Add a clear README explaining what it does and how to use it.' },
              { icon: '💡', title: 'Show Your Process', text: 'Be ready to explain your code and decisions. Understanding matters more than perfection.' }
            ].map((tip, i) => (
              <div key={i} style={{
                padding: '15px',
                background: '#f7fafc',
                borderRadius: '10px',
                borderLeft: '4px solid #667eea'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{tip.icon}</div>
                <h4 style={{ color: '#2d3748', marginBottom: '8px' }}>{tip.title}</h4>
                <p style={{ color: '#4a5568', margin: 0, fontSize: '0.95rem' }}>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '40px',
          padding: '20px',
          opacity: 0.9
        }}>
          <p style={{ margin: 0 }}>
            Good luck with your hackathon! Remember: done is better than perfect. 🚀
          </p>
        </footer>
      </div>
    </div>
  )
}
