import Section_About from "./components/sections/about/section_about";
import Section_Contact from "./components/sections/contact/section_contact";
import Section_Introduction from "./components/sections/introduction/section_introduction";
import Section_Projects from "./components/sections/projects/section_projects";
import Section_Services from "./components/sections/services/section_services";
import Section_Testimonials from "./components/sections/testimonials/section_testimonials";

export default function Item() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <Section_Introduction></Section_Introduction>
      <Section_About></Section_About>
      <Section_Services></Section_Services>
      <Section_Projects></Section_Projects>
      <Section_Testimonials></Section_Testimonials>
      <Section_Contact></Section_Contact>
    </div>
  );
}
