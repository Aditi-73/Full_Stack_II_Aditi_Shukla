export default function Profile() {
    return (
        <div className="app-container">
        <div className="page-content">
            <h1>Profile Page</h1>
            <p>
            Welcome to your Profile page. Here you can view and manage your personal information.
            </p>
            <div>
            <h2>User Information</h2>
            <p><strong>Name:</strong> Aditi Shukla</p>
            <p><strong>Email:</strong> Aditshu73@gmail.com</p>
            <p><strong>Location:</strong> Chandigarh, India</p>
            <p><strong>Bio:</strong> Passionate developer and tech enthusiast.</p>
            </div>
            <div>
            <h2>About Me</h2>
            <p>
                My name is Aditi Shukla, and I am a curious and driven third-year university student with a strong interest in artificial intelligence, machine learning, and data analytics. I enjoy building practical, impactful projects that solve real-world problems. Passionate about continuous learning, I strive to strengthen my technical expertise and analytical thinking skills.
            </p>
            </div>
            <div>
            <h2>Technical Skills</h2>
            <div className="skills-container">
                <button className="skill-button">Machine Learning</button>
                <button className="skill-button">Data Analysis</button>
                <button className="skill-button">Python Programming</button>
                <button className="skill-button">SQL</button>
                <button className="skill-button">Statistical Analysis</button>
            </div>
            </div>
            <div>
            <h2>Account Settings</h2>
            <p>You can update your profile information and preferences from here.</p>
            </div>
        </div>
        </div>
    )
}
