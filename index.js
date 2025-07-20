const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 7320
app.use(cors())
let state = {
    ME:{
        data:{
            name: "Nabbo Noushad Darad",
            email:"nabbonoushad@gmail.com",
            phone:"+8801747082584",
            address:"Bangladesh",
            about:"Hello, world! My name is Nabbo Noushad Darad, and I am a web developer. I’ve been developing websites for over 2 years and have shared successes with companies of all sizes. I have helped over 20 clients by developing and launching websites for them, resulting in a 100% increase in their online presence and engagement.",
            website:"nabbonoushad.xyz",
            skills: {
                HTML:{
                    experience: "2 Years",
                    clients: "20+",
                    certificates: "https://www.freecodecamp.org/certification/nabbo-noushad-darad/responsive-web-design"
                }, 
                CSS:{
                    experience: "2 Years",
                    clients: "20+",
                    certificates: "https://www.freecodecamp.org/certification/nabbo-noushad-darad/responsive-web-design"
                }, 
                JS:{
                    experience: "2 Years",
                    clients: "20+",
                    certificates: "https://www.freecodecamp.org/certification/nabbo-noushad-darad/responsive-web-design"
                }, 
                NodeJS:{
                    experience: "1 Years",
                    clients: "5+",
                    certificates: "Not Applicable"
                }, 
                PHP:{
                    experience: "2 Years",
                    clients: "20+",
                    certificates: "Not Applicable"
                }, 
                WordPress:{
                    experience: "2 Years",
                    clients: "20+",
                    certificates: "Not Applicable"
                },
                Bootstrap:{
                    experience: "1 Years",
                    clients: "10+",
                    certificates: "https://www.freecodecamp.org/certification/nabbo-noushad-darad/front-end-development-libraries"
                }, 
                React:{
                    experience: "6 Months",
                    clients: "Not Applicable",
                    certificates: "https://www.freecodecamp.org/certification/nabbo-noushad-darad/front-end-development-libraries"
                }, 
                Laravel:{
                    experience: "1.5 Years",
                    clients: "5+",
                    certificates: "Not Applicable",
                },
            },
            expectedSalary: "anything thats more than 1 US dollar plz",
            github: "https://github.com/nabbonoushad",
            LinkedIn: "https://www.linkedin.com/in/nabbo-noushad-darad/",
            image: "https://raw.githubusercontent.com/nabbonoushad/nabbonoushad/refs/heads/main/Untitled%20design%20(35).png"
        },
        type: "profile",
        role: "Jr Web Developer",
        caffineLevel: "Enough to get me on a DEA list",
    }
}

app.get('/', (req, res) => {
    res.send("Welcome!")
})
app.get('/api/about-me', (req, res) => {
    res.json(state)
})
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
