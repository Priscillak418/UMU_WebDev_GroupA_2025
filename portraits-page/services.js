    const sections = document.querySelectorAll("section");

    const revealOnScroll = () => {
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top < window.innerHeight - 120) {
                sec.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    
    const boxes = document.querySelectorAll(".service-box");
    boxes.forEach((box, i) => {
        box.style.opacity = "0";
        box.style.transform = "translateY(30px)";
        setTimeout(() => {
            box.style.transition = "1s ease";
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }, 400 * (i + 1));
    });