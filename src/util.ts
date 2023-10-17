const getLeftSidebarWidth = () => {
    let leftSidebar = document.getElementById("left-sidebar");
    let leftSidebarWidth = leftSidebar.offsetWidth;

    return leftSidebarWidth;
}

export const updateContainerLocation = () => {
    let leftSidebarWidth = getLeftSidebarWidth;

    let container = document.getElementById("smart-query-container");
    container.style.setProperty("left", `${leftSidebarWidth}`);
    console.log("update left:", leftSidebarWidth);
}