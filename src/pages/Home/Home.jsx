

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <-- IMPORTED LINK
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useAuth } from "../../context/AuthContext";

// --- Data (Can be moved to a separate file, e.g., src/data/homeData.js) ---
const courses = [
    { name: "Full Stack Web Dev", desc: "HTML, CSS, JS, React, and Node.js", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "6 weeks", amount: 6333 },
    { name: "Python for AI", desc: "Learn Python with AI use cases", image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "5 weeks", amount: 3499 },
    { name: "Data Science Bootcamp", desc: "Pandas, NumPy, Matplotlib, ML", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "8 weeks", amount: 4999 },
    { name: "Cloud Fundamentals", desc: "AWS, GCP, Azure basics", image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D", duration: "4 weeks", amount: 2000 },
    { name: "Cybersecurity Essentials", desc: "Network security & best practices", image: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "6 weeks", amount: 2500 },
    { name: "Mobile App Dev", desc: "React Native & Flutter", image: "https://images.unsplash.com/photo-1650636353551-1275516077b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "6 weeks", amount: 3000 },
    { name: "UI/UX Design", desc: "Figma, prototyping, wireframes", image: "https://images.unsplash.com/photo-1576153192621-7a3be10b356e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "4 weeks", amount: 1000 },
    { name: "Game Dev with Unity", desc: "Make your own games in Unity", image: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", duration: "7 weeks", amount: 3999 },
];

const donations = [
    { title: "Sponsor Education", image: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Help a child go to school. Your contribution can change a life.", amount: 1000 },
    { title: "Plant Trees", image: "https://images.unsplash.com/photo-1600296343269-737803e6231d?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Support green projects and help combat climate change.", amount: 500 },
    { title: "Women Empowerment", image: "https://images.unsplash.com/photo-1621783014861-dc6ef309bd05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Contribute to training and skill development programs for women.", amount: 750 },
    { title: "Animal Welfare", image: "https://plus.unsplash.com/premium_photo-1722054522739-ae2be648a177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D", desc: "Help provide shelter, food, and medical care for stray animals.", amount: 700 },
];

// --- Reusable Components (Can be moved to src/components/) ---

const InteractiveCard = ({ children, glowColor }) => {
    const mouseX = useMotionValue(200);
    const mouseY = useMotionValue(150);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 400], [-10, 10]);

    return (
        <motion.div
            className="group relative h-full w-full"
            style={{ perspective: 1000, rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                mouseX.set(200); // Reset to center
                mouseY.set(150); // Reset to center
            }}
        >
            <div
                className="absolute inset-0 rounded-xl bg-gray-800/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([newX, newY]) => `radial-gradient(400px at ${newX}px ${newY}px, ${glowColor}, transparent 80%)`
                    ),
                }}
            />
            {children}
        </motion.div>
    );
};

const CourseCard = ({ course }) => (
    <InteractiveCard glowColor="rgba(16, 185, 129, 0.25)">
        <div className="relative h-full flex flex-col rounded-xl bg-gray-900/70 p-1 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:ring-emerald-500/80">
            <div className="overflow-hidden rounded-lg">
                <img src={course.image} alt={course.name} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0a0a0a/10b981?text=Course'; }}/>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">{course.name}</h3>
                <p className="mt-2 flex-grow text-sm text-gray-400">{course.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">{course.duration}</span>
                    <span className="text-xl font-bold text-emerald-400">₹{course.amount.toLocaleString("en-IN")}</span>
                </div>
                {/* --- UPDATED TO LINK --- */}
                <Link
                    to="/donate-form"
                    state={{ amount: course.amount, name: course.name }}
                    className="mt-5 block w-full rounded-lg bg-emerald-600/90 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    </InteractiveCard>
);

const DonationCard = ({ donation }) => (
     <InteractiveCard glowColor="rgba(99, 102, 241, 0.25)">
        <div className="relative h-full flex flex-col rounded-xl bg-gray-900/70 p-1 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:ring-indigo-500/80">
            <div className="overflow-hidden rounded-lg">
                <img src={donation.image} alt={donation.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/0a0a0a/6366f1?text=Cause'; }}/>
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">{donation.title}</h3>
                <p className="mt-2 flex-grow text-sm text-gray-400">{donation.desc}</p>
                 {/* --- UPDATED TO LINK --- */}
                <Link
                    to="/donate-form"
                    state={{ amount: donation.amount, name: donation.title }}
                    className="mt-5 block w-full rounded-lg bg-indigo-600/90 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Donate
                </Link>
            </div>
        </div>
    </InteractiveCard>
);

const LiveClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);
    return <span className="text-sm font-mono text-gray-300">{time.toLocaleTimeString()}</span>;
};

// --- Main Home Component ---
export default function Home() {
    // Mock user for display. Replace with your actual auth context.
    const {user} =  useAuth() ;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <>
            {/* Global styles. Best placed in your main CSS file (e.g., index.css) */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');
                body { 
                    font-family: 'Sora', sans-serif;
                    background-color: #030712;
                }
                .animated-gradient {
                    background: linear-gradient(300deg, #030712, #1f2937, #047857, #4f46e5);
                    background-size: 240% 240%;
                    animation: gradient-animation 16s ease infinite;
                }
                @keyframes gradient-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>

            <div className="relative min-h-screen text-gray-200">
                <div className="animated-gradient fixed inset-0 -z-10"></div>
                
                <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-900/50 backdrop-blur-xl">
                    <div className="mx-auto flex h-20  items-center justify-between px-4 sm:px-6 lg:px-8">
                        <a className="flex items-center gap-3" href="#">
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                                SmartPay
                            </span>
                        </a>
                        <div className="flex items-center gap-4">
                            <LiveClock />
                            <div className="hidden h-8 w-px bg-white/10 sm:block"></div>
                            <span className="hidden text-sm sm:block">
                                Welcome, <strong className="font-semibold text-white">{user.name}</strong>
                            </span>
                             {/* --- UPDATED TO LINK --- */}
                            <Link
                                to="/"
                                className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
                    <motion.section className="text-center mb-24" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Elevate Your Skills, Empower a Cause
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                            Dive into cutting-edge courses and support meaningful initiatives. Your journey of growth starts here.
                        </p>
                    </motion.section>

                    <section className="mb-24">
                        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Featured Courses
                        </h2>
                        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            {courses.map((course) => (
                                <motion.div key={course.name} variants={itemVariants}>
                                    <CourseCard course={course} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <section>
                        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Change the World
                        </h2>
                        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            {donations.map((donation) => (
                                <motion.div key={donation.title} variants={itemVariants}>
                                    <DonationCard donation={donation} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>
                </main>
            </div>
        </>
    );
}
