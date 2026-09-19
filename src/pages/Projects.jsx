import ProjectCard from '../components/ProjectCard'

import { useEffect, useState } from 'react'
import { supabase } from '../supabase-client'

export default function ProjectsPage() {
    const [projects, setProjects] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getProjects() {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: true }) 
            if (error) {
                setError(error.message)
            } else {
                setProjects(data)
            }
        }
        getProjects()
    }, [])

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Projects</h1>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {projects.length === 0 && !error && <p>Loading projects...</p>}

            <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}