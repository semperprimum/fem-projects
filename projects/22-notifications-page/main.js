const notifications = document.querySelectorAll(".notification");
const btnReadAll = document.querySelector(".btn-read-all");
const notificationCounter = document.getElementById("notification-counter");

const countNotifications = () => {
    let notificationCount = 0;
    notifications.forEach(notification => {
        if (notification.getAttribute("data-read") === "false") notificationCount++;
    })
    if (notificationCount > 0) {
        notificationCounter.innerText = notificationCount;
    } else {
        notificationCounter.style.display = "none";
        btnReadAll.style.display = "none"
    }
}

btnReadAll.addEventListener("click", () => {
    notifications.forEach(notification => {
        notification.setAttribute("data-read", true)
    })
    btnReadAll.style.display = "none";
    notificationCounter.style.display = "none";
})

countNotifications();