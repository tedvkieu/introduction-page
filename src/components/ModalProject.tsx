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
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
                {/* Header */}
                <div className="p-2 flex justify-between items-center mb-4 bg-stone-300">
                    <h3 className="text-lg sm:text-2xl font-semibold text-white">
                        {project.title}
                    </h3>
                    <button onClick={closeModal}>
                        <FaTimes className="text-xl text-gray-600 hover:text-gray-900" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row flex-1 gap-4">
                    {/* Left part: Project Info */}
                    <div className="w-full sm:w-2/6 p-3 sm:pr-5 border-b sm:border-b-0 sm:border-r border-gray-300 text-left overflow-auto max-h-[70vh]">
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ) : (
                            <>
                                <div className="mt-2 sm:mt-4">
                                    <h4 className="text-sm font-semibold text-gray-600">
                                        My Role:
                                    </h4>
                                    <p className="text-sm text-gray-800">
                                        {project.details}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-gray-600">
                                        Project Description:
                                    </h4>
                                    <p className="text-sm text-gray-800">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-gray-600">
                                        Skills and Deliverables
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 text-xs text-gray-600">
                                    <p>Published on: {project.publishDate}</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right part: Demo Images */}
                    <div className="w-full sm:w-4/6 overflow-auto max-h-[70vh] p-2">
                        <div className="flex flex-col gap-4">
                            {project.demoImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="w-full overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={image}
                                        alt={`Demo ${index}`}
                                        className="object-cover w-full h-auto"
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
