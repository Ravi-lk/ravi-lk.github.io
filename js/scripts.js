function showProjectDetails(projectId) {
    var project = document.getElementById(projectId);
    if (project.style.display === "none" || project.style.display === "") {
        project.style.display = "block";
    } else {
        project.style.display = "none";
    }
}
