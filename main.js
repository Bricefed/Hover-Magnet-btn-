const buttons = document.querySelectorAll(".btn-box");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const position = btn.getBoundingClientRect();

    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    // BOX
    btn.style.transform = `
      translate(${x * 0.3}px, ${y * 0.3}px)
    `;

    // TEXT
    btn.children[0].style.transform = `
      translate(${x * 0.3}px, ${y * 0.3}px)
    `;
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "translate(0, 0)";
    btn.children[0].style.transform = "translate(0, 0)";
  });
});
