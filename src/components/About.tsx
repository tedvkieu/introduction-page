'use client';
import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import ModalProject from './ModalProject';
import { Code, Database, Wrench, Globe } from 'lucide-react';
// Define the types for the project and skills
interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    skills: string[];
    publishDate: string;
    demoImages: string[];
}

const skills = [
    {
        category: 'Back-end',
        items: [
            'Java (Spring Boot)',
            'Javascript (Node.js/Express)',
            'Python (Flask)',
        ],
        icon: <Code size={20} />,
    },
    {
        category: 'Front-end',
        items: [
            'HTML, CSS/SASS/TailwindCSS',
            'Javascript, Typescript (Next.js, React.js)',
            'UX/UI Design (Figma)',
        ],
        icon: <Globe size={20} />,
    },
    {
        category: 'Database',
        items: ['MySQL', 'PostgreSQL', 'MongoDB'],
        icon: <Database size={20} />,
    },
    {
        category: 'Tools & Technologies',
        items: [
            'Git',
            'Postman',
            'WebSocket',
            'RabbitMQ',
            'Google OAuth2',
            'Google Cloud Storage (GCS)',
        ],
        icon: <Wrench size={20} />,
    },
];

const projects: Project[] = [
    {
        id: 1,
        title: 'Document Conversion & OCR System',
        description:
            'As a Fullstack Developer, I successfully designed and implemented a document processing and OCR (Optical Character Recognition) application. The system enables users to upload documents, extract text with high accuracy, and convert PDF files into editable DOCX formats. (image2docx, pdf2docx, idcard2text)',
        details: 'Full-Stack Developer, core developer',
        skills: [
            'Java Spring Boot',
            'Typescript Next.js',
            'Python Flask',
            'PostgreSQL',
            'RabbitMQ',
            'Websocket',
            'PaddleOCR',
            'Microservice Architecture',
        ],
        publishDate: 'Feb 13, 2025',
        demoImages: [
            '/assets/design/ocr0.png',
            '/assets/design/ocr1.png',
            '/assets/design/ocr2.png',
            '/assets/design/ocr3.jpg',
            '/assets/design/ocr4.png',
        ],
    },
    {
        id: 2,
        title: 'Study4 - Online TOEIC Exam Preparation',
        description: `This application is a clone of the Study4 website. Study4 is an online learning platform 
        that helps learners prepare for the TOEIC certification effectively and systematically.
        The application provides a structured learning path, including: Vocabulary & grammar lessons based on TOEIC topics,
        Practice for each test section (Part 1 - 7), Progress tracking to help learners monitor their improvement.
        Additionally, Study4 offers admin support with the following features: Lesson management: Upload and edit learning content.
        User management: Track learners' study activities. Exam management: Create and update TOEIC practice tests`,
        details: 'Full-stack development',
        skills: ['Express.js', 'React.js', 'MySQL'],
        publishDate: '...',
        demoImages: [
            '/assets/design/toeic1.png',
            '/assets/design/toeic2.png',
            '/assets/design/toeic3.png',
            '/assets/design/toeic4.png',
            '/assets/design/toeic5.png',
            '/assets/design/toeic6.png',
            '/assets/design/toeic7.png',
        ],
    },
    {
        id: 3,
        title: 'PotatoCare - Leaves Disease Detection',
        description: `In agriculture, early detection of plant diseases, especially in potatoes, plays a crucial role in protecting crops and improving yield. PotatoCare is designed to help farmers quickly and accurately identify diseases on potato leaves. 
            The application leverages the deep learning model YOLOv8 to detect four common potato leaf diseases: Early Blight, Late Blight
            Nematode, Pest. Users simply upload an image of the potato leaf, and the system will automatically analyze it and return disease detection results in real time. With advanced computer vision technology, PotatoCare empowers farmers to make timely decisions for disease prevention and treatment, ultimately enhancing crop productivity and quality.`,
        details: 'Full-Stack Developer, core developer',
        skills: ['Javascript React.js', 'Python Flask', 'YoloV8', 'MySQL'],
        publishDate: '...',
        demoImages: [
            '/assets/design/potato1.png',
            '/assets/design/potato2.png',
            '/assets/design/potato3.png',
            '/assets/design/potato4.png',
            '/assets/design/potato5.png',
        ],
    },
];

const education = [
    {
        degree: 'Major: Information Technology - Senior Student ',
        school: 'Thuy Loi University',
        year: '2021 - 2025',
    },
];

export default function About() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="flex flex-col items-center text-center p-6 sm:p-8">
            <div className="w-full max-w-4xl p-4 sm:p-8 bg-gray-100 rounded-lg shadow-lg">
                {/* Container with Flex for Avatar and Info */}
                <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-4">
                    {/* Avatar */}
                    <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                        <AvatarImage
                            src="/assets/kieu5.jpg"
                            alt="Duong Van Kieu"
                        />
                        <AvatarFallback>YN</AvatarFallback>
                    </Avatar>

                    {/* Name & Title */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-600">
                            Duong Van Kieu
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600">
                            Web Developer
                        </p>

                        {/* Contact Information */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-700 mt-2">
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaEnvelope className="text-gray-600 text-xs sm:text-sm" />
                                <span>tedvkieu@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaPhone className="text-gray-600 text-xs sm:text-sm" />
                                <span>+84 83 899 4841</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaLinkedin className="text-blue-600 text-xs sm:text-sm" />
                                <a
                                    href="https://www.linkedin.com/in/tedvkieu/"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    linkedin.com/in/tedvkieu/
                                </a>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <FaGithub className="text-blue-600 text-xs sm:text-sm" />
                                <a
                                    href="https://github.com/tedvkieu"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    github.com/tedvkieu/
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center gap-1 sm:gap-2">
                            <FaLocationDot className="text-red-400 text-xs sm:text-sm" />
                            <span className="text-gray-600 text-xs sm:text-sm">
                                128St, Phuoc Long A ward, Thu Duc City, HCM
                                City, Vietnam
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <Card className="mt-4 w-full max-w-4xl">
                    <CardContent className="p-4">
                        <p className="text-sm text-gray-700">
                            I&apos;m a final-year student and am currently
                            available for full-time work. Throughout my studies
                            and internship at CodeZX company, I have
                            continuously honed my skills in web development,
                            covering both Front-end and Back-end. I have
                            experience working with JavaScript/TypeScript,
                            utilizing Next.js and React.js to build intuitive
                            user interfaces, combined with UX/UI design in Figma
                            to enhance user experience. Additionally, I have
                            worked with Java, JavaScript, and Python, applying
                            frameworks such as Spring Boot, Node.js, and Flask
                            to develop robust Back-end systems. I have
                            experience processing image data and integrating
                            WebSocket, RabbitMQ, GCS,... into applications.
                            Beyond technical skills, I&apos;m familiar with the
                            Scrum methodology. With a solid technical foundation
                            and a strong willingness to learn, I&apos;m
                            confident in my ability to contribute meaningfully
                            and bring value to the company.
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-8 w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 text-left">
                    Portfolio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                            onClick={() => handleProjectClick(project)}>
                            {/* Hiển thị tấm ảnh đầu tiên trong demoImages */}
                            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={project.demoImages[0]}
                                    alt={project.title}
                                    className="object-cover w-full h-full scale-110 hover:scale-125 transition-transform duration-300"
                                />
                            </div>

                            {/* Tiêu đề project */}
                            <h3 className="text-sm font-light text-green-600 hover:text-green-400">
                                {project.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <ModalProject
                        project={selectedProject}
                        closeModal={closeModal}
                    />
                )}
            </div>

            <div className="mt-8 w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 text-left">
                    Skills
                </h2>
                <ul className="space-y-4">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm text-blue-500">
                                    {skill.icon}
                                </span>
                                <h3 className="text-sm font-medium text-gray-800">
                                    {skill.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
                {/* Education */}
                <div className="w-full max-w-4xl mx-auto text-left">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700 text-left">
                        Education
                    </h2>
                    <div className="flex flex-col gap-2">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="p-4 bg-white rounded-lg shadow-md">
                                <h3 className="text-gray-600 text-sm">
                                    {edu.degree}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {edu.school}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {edu.year}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
