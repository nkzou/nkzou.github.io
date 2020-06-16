var tabContentIDs = ["about", "work", "projects"];
function tabswap(clickedTab) {
    tabContentIDs.forEach(e => {
        var tabID = document.getElementById("tab-"+e);
        var tabContentID = document.getElementById(e);
        console.log(e)
        if(clickedTab === e){
            tabID.classList.add("is-active");
            tabContentID.style.display = "block";
        } else {
            tabID.classList.remove("is-active");
            tabContentID.style.display = "none";
        }
    });
}