import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchProjects } from "../store/slices/ProjectSlice";
export default function Proyectos() {
    const dispatch = useDispatch<AppDispatch>();

    const {items, loading}= useSelector((state: RootState)=> state.projects);
    useEffect(() => {
       dispatch(fetchProjects());
    }, [dispatch])
 
 
    return (
    <section>
        {loading && <p>Cargando espere porfavor...</p>}
        {items.map(p=>(
            <div key={p.id}>{p.title}</div>
        ))}
    </section>
  )
}
