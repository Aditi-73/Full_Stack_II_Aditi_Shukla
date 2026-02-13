export default function Dashboard() {
    return (
        <div className="app-container">
        <div className="page-content">
            <h1>Dashboard Page</h1>
            <p>
            Welcome to your Dashboard. This is your main hub where you can see an overview of your activities and key statistics.
            </p>
            <div>
            <h2>Skills</h2>
            <div className="skills-container">
                <button className="skill-button">Machine Learning</button>
                <button className="skill-button">Data Analysis</button>
                <button className="skill-button">Python Programming</button>
                <button className="skill-button">SQL</button>
                <button className="skill-button">Statistical Analysis</button>
            </div>
            </div>
            <div>
            <h2>Projects</h2>
            <div className="projects-section">
                <h3>1. AI-Based Waste Classification System</h3>
                <ul>
                <li>Developed an image-based waste classification model using machine learning techniques.</li>
                <li>Performed image preprocessing (resizing, noise removal, normalization) using OpenCV.</li>
                <li>Extracted relevant features and trained a classification model to categorize waste (e.g., biodegradable, recyclable).</li>
                <li>Improved accuracy through model evaluation and optimization.</li>
                <li>Designed the system workflow from image acquisition to final prediction output.</li>
                </ul>
            </div>
            <div className="projects-section">
                <h3>2. Tenant Verification Web Application</h3>
                <ul>
                <li>Built a full-stack web application to streamline tenant background verification.</li>
                <li>Designed an interactive frontend interface with authentication features.</li>
                <li>Implemented backend logic for data handling and verification processing.</li>
                <li>Integrated database management for storing tenant records securely.</li>
                <li>Focused on solving real-world rental fraud and trust issues through digital verification.</li>
                </ul>
            </div>
            </div>
            <div>
            <h2>Recent Activity</h2>
            <p>Your recent tasks and updates will appear here.</p>
            </div>
        </div>
        </div>
    )
}
