export default function ProjectCard({ project }) {
    const getStatusStyles = (status) => {
        switch (status?.toLowerCase()) {
            case 'planned': case 'idea':
                return 'bg-blue-100 text-blue-700 border-blue-300'
            case 'active': case 'live':
                return 'bg-green-100 text-green-700 border-green-300'
            case 'in progress': case 'building':
                return 'bg-yellow-100 text-yellow-700 border-yellow-300'
            case 'completed':
                return 'bg-blue-100 text-blue-700 border-blue-300'
            default:
                return 'bg-gray-100 text-gray-700 border-gray-300'
        }
    }

    return (
        <div className='bg-white p-5 rounded-lg border border-[#e5e4e7] shadow-sm flex flex-col gap-2'>
            <h3 className='text-lg font-semibold text-[#08060d]'>{project.title}</h3>
            <hr className='border-gray-200' />
            {project.status && (
                <div>
                    <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusStyles(project.status)}`}>
                        {project.status}
                    </span>
                </div>
            )}

            <p className='text-sm text-[#6b6375]'>{project.short_description}</p>
        </div>
    )
}