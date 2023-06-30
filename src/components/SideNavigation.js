import NavigationSearch from "./NavigationSearch";
import NavigationAccordion from "./NavigationAccordion";

function SideNavigation() {
  return (
    <div className="side-bar">
      <NavigationSearch />
      <NavigationAccordion />
    </div>
  );
}

export default SideNavigation;
