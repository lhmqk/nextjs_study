import Section_About from "./components/sections/about/section_about";
import Section_Introduction from "./components/sections/introduction/section_introduction";
import Section_Services from "./components/sections/services/section_services";

export default function Item() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <Section_Introduction></Section_Introduction>
      <Section_About></Section_About>
      {/* <Section_Services></Section_Services> */}
    </div>
  );
}
