'use client';
import { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import ModalProject from './ModalProject';

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

const skills: string[] = ['Canva', 'Capcut', 'English', 'AI'];

const projects: Project[] = [
    {
        id: 1,
        title: 'Sweet Avacado',
        description:
            'As a Fullstack Developer, I successfully designed and implemented a document processing and OCR (Optical Character Recognition) application. The system enables users to upload documents, extract text with high accuracy, and convert PDF files into editable DOCX formats. (image2docx, pdf2docx, idcard2text)',
        details: 'Full-Stack Developer, core developer',
        skills: [
            'Spring Boot',
            'Next.js',
            'RabbitMQ',
            'Websockets',
            'OCR Algorithm',
        ],
        publishDate: 'Feb 13, 2025',
        demoImages: [
            '/assets/design/1.png',
            '/assets/design/2.png',
            '/assets/design/3.png',
        ],
    },
    {
        id: 2,
        title: 'Super Sum Tea',
        description: 'A description for Project 2',
        details: 'Your role in this project',
        skills: ['Skill 1', 'Skill 2'],
        publishDate: 'Feb 20, 2025',
        demoImages: ['/assets/design/4.png', '/assets/design/5.png'],
    },
    {
        id: 3,
        title: 'Skin care Catalog',
        description:
            'As a Fullstack Developer, I successfully designed and implemented a document processing and OCR (Optical Character Recognition) application. The system enables users to upload documents, extract text with high accuracy, and convert PDF files into editable DOCX formats. (image2docx, pdf2docx, idcard2text)',
        details: 'Full-Stack Developer, core developer',
        skills: [
            'Spring Boot',
            'Next.js',
            'RabbitMQ',
            'Websockets',
            'OCR Algorithm',
        ],
        publishDate: 'Feb 13, 2025',
        demoImages: [
            '/assets/design/6.png',
            '/assets/design/7.png',
            '/assets/design/8.png',
        ],
    },
];

const education = [
    {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        year: '2022 - 2026',
    },
    {
        degree: 'High School Diploma',
        school: 'High School A',
        year: '2018 - 2022',
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
        <section className="flex flex-col items-center text-center p-8">
            <div className="w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
                {/* Container with Flex for Avatar and Info */}
                <div className="flex items-center gap-6">
                    {/* Avatar */}
                    <Avatar className="w-32 h-32">
                        <AvatarImage
                            src="/assets/khang1.png"
                            alt="Le Huu Minh Khang"
                        />
                        <AvatarFallback>YN</AvatarFallback>
                    </Avatar>

                    {/* Name & Title */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-600 text-left">
                            Le Huu Minh Khang
                        </h1>
                        <p className="text-lg text-gray-600 text-left">
                            Marketing Content
                        </p>

                        {/* Contact Information */}
                        <div className="flex flex-wrap gap-6 text-sm text-gray-700 mt-2">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-gray-600" />
                                <span>khang158203@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-gray-600" />
                                <span>+84 867 154 342</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLinkedin className="text-blue-600" />
                                <a
                                    href="https://www.linkedin.com/in/minh-khang-b37159343/"
                                    className="text-blue-600 hover:underline">
                                    linkedin.com/in/minh-khang-b37159343
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                            <FaLocationDot className="text-red-400 text-sm" />
                            <span className="text-left text-gray-600 text-sm">
                                Tan Phu Ward, Ho Chi Minh City, Vietnam
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <Card className="mt-4 w-full max-w-4xl">
                    <CardContent className="p-4">
                        <p className="text-gray-700">
                            I am a creative marketing content strategist with
                            expertise in crafting compelling narratives and
                            engaging campaigns. With a deep understanding of
                            digital marketing, I specialize in creating content
                            that drives brand awareness, fosters customer
                            engagement, and increases conversions. Passionate
                            about storytelling and data-driven strategies, I
                            help brands connect with their audience in
                            meaningful ways.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
                {/* Skills */}
                <div className="w-full max-w-4xl mx-auto">
                    <h2 className="text-xl mb-4  text-gray-600 text-left">
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="mt-8 w-full max-w-4xl mx-auto text-left">
                    <h2 className="text-xl  mb-4 text-gray-600">Education</h2>
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

            <div className="mt-8 w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4 text-gray-600 text-left">
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
                                    src={project.demoImages[0]} // Lấy ảnh đầu tiên trong mảng demoImages
                                    alt={project.title}
                                    className="object-cover w-full h-full"
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
        </section>
    );
}
