export const smoothScroll = (elementId) => {
  const element = document.getElementById(elementId);

  element.scrollIntoView({
    behavior: "smooth",
    inline: "nearest",
    block: "start",
  });
};
