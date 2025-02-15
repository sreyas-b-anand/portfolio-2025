export const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/resume.pdf"; // Path to the file in the public folder
    link.download = "Sreyas_B_Anand_Resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  