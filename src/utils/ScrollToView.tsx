export const scrollToSection = async (id: string) => {
  const section = document.getElementById(id);
  if (!section) {
    //console.log("no section");
    return;
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" });
};
