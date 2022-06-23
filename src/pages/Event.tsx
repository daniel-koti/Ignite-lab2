import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [sidebarVisibleValue, setSidebarVisibleValue] = useState('hidden')

  function handleToggleSidebar() {
    sidebarVisibleValue === 'hidden' ? setSidebarVisibleValue('') : setSidebarVisibleValue('hidden');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleSidebar={handleToggleSidebar}/>
      <main className="lg:flex flex-1 relative">
        { slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1" />
        }
        <Sidebar visible={sidebarVisibleValue}/>
      </main>
    </div>
  );
}