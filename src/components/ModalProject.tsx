import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    skills: string[];
    publishDate: string;
    demoImages: string[];
}

interface ModalProps {
    project: Project;
    closeModal: () => void;
}

export default function ModalProject({ project, closeModal }: ModalProps) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (sử dụng thời gian giả lập để có hiệu ứng load)
        const timer = setTimeout(() => setLoading(false), 300); // 1s để giả lập loading

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full flex flex-col min-h-[90vh]">
                {/* Header: Title and close button */}
                <div className="p-2 flex justify-between items-center mb-4 bg-stone-300">
                    <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                    </h3>
                    <button onClick={closeModal}>
                        <FaTimes className="text-xl text-gray-600 hover:text-gray-900" />
                    </button>
                </div>

                {/* Content: Left part (4/6) and Right part (2/6) */}
                <div className="flex flex-1">
                    {/* Left part: Project information (4/6 width) */}
                    <div className="w-2/5 pr-5 mr-2 overflow-auto border-r border-gray-300 text-left">
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ) : (
                            <>
                                <div className="mt-4 flex items-center">
                                    <h4 className="text-sm mr-4 text-[rgb(103,103,103)] bg-[rgba(0,0,0,0)] font-[Neue Montreal, neue-montreal-fallback, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'] text-base">
                                        My Role:
                                    </h4>
                                    <p className="text-[rgb(24,24,24)] bg-[rgba(0,0,0,0)] font-[Neue Montreal, neue-montreal-fallback, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'] text-base">
                                        {project.details}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-sm mr-4 text-[rgb(103,103,103)] bg-[rgba(0,0,0,0)] font-[Neue Montreal, neue-montreal-fallback, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'] text-base">
                                        Project Description:{' '}
                                    </h4>

                                    <p className="text-[rgb(24,24,24)] bg-[rgba(0,0,0,0)] font-[Neue Montreal, neue-montreal-fallback, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'] text-base">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <h4 className="text-sm mr-4 text-[rgb(103,103,103)] bg-[rgba(0,0,0,0)] font-[Neue Montreal, neue-montreal-fallback, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'] text-base">
                                        Skills and Deliverables
                                    </h4>
                                    <ul className="list-disc pl-6 text-gray-700">
                                        {project.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-10 text-sm text-gray-600">
                                    <p>Published on: {project.publishDate}</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right part: Demo images (2/3 width) */}
                    <div className="ml-1 w-3/5 overflow-auto max-h-[80vh]">
                        <div className="flex flex-col gap-4">
                            {project.demoImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="w-full h-full overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={image}
                                        alt={`Demo ${index}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
