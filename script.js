const innerScroller = document.querySelector(".card-profile");
const scrollerContent = Array.from(innerScroller.children);

scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    innerScroller.appendChild(duplicatedItem);
})