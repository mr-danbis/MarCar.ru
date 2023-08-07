window.addEventListener('DOMContentLoaded', () => {
    let headerContainer = document.getElementById('header');
    let xhrHeader = new XMLHttpRequest();
    xhrHeader.open('GET', '/components/header.html', true);
    xhrHeader.onreadystatechange = () => {
        if (xhrHeader.readyState === 4 && xhrHeader.status === 200) {
            headerContainer.innerHTML = xhrHeader.responseText;
        }
    };
    xhrHeader.send();

    let footerContainer = document.getElementById('footer');
    let xhrFooter = new XMLHttpRequest();
    xhrFooter.open('GET', '/components/footer.html', true);
    xhrFooter.onreadystatechange = () => {
        if (xhrFooter.readyState === 4 && xhrFooter.status === 200) {
            footerContainer.innerHTML = xhrFooter.responseText;
            new ItcAccordion("#accordion-footer");
        }
    };
    xhrFooter.send();
});

const toggleDropdown = (dropdownId) => {
    let dropdown = document.getElementById("dropdown-" + dropdownId);
    let header = document.querySelector(".header");
    let mainContent = document.querySelector(".main-content");

    if (dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        header.classList.remove("dropdown-active");
        mainContent.classList.remove("dropdown-active");
    } else {
        let activeDropdown = document.querySelector(".dropdown-content.active");
        if (activeDropdown) {
            activeDropdown.classList.remove("active");
        }
        dropdown.classList.add("active");
        header.classList.add("dropdown-active");
        mainContent.classList.add("dropdown-active");
    }
};

const closeDropdown = (dropdownId) => {
    let dropdown = document.getElementById("dropdown-" + dropdownId);
    let header = document.querySelector(".header");
    let mainContent = document.querySelector(".main-content");

    dropdown.classList.remove("active");
    header.classList.remove("dropdown-active");
    mainContent.classList.remove("dropdown-active");
};


const videPlayer = (videoContainers, video) => {
    const VIDEOCONTAINERS = document.querySelectorAll(videoContainers);
    const VIDEO = video;

    VIDEOCONTAINERS.forEach((videoContainer) => {
        let player = new Plyr(videoContainer.querySelector(VIDEO));

        videoContainer.addEventListener('ended', () => {
            videoContainer.querySelector('.video-icon').style.display = 'block';
        });

        videoContainer.addEventListener('mouseenter', () => {
            videoContainer.querySelector('.video-icon').style.opacity = '1';
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (VIDEO.paused || VIDEO.ended) {
                videoContainer.querySelector('.video-icon').style.opacity = '1';
            } else {
                videoContainer.querySelector('.video-icon').style.opacity = '0';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    videPlayer(".service__video-content", ".video");
});

document.addEventListener('DOMContentLoaded', () => {
    videPlayer(".about-video-content", ".video");
});

const handleToggleText = (containerSelector, subtitleSelector, readMoreSelector, collapseSelector, maxHeight) => {
    const container = document.querySelector(containerSelector);
    const subtitle = container && container.querySelector(subtitleSelector);
    const btnReadMore = container && container.querySelector(readMoreSelector);
    const btnCollapse = container && container.querySelector(collapseSelector);

    if (!container || !subtitle || !btnReadMore || !btnCollapse) {
        return;
    }

    btnReadMore.addEventListener('click', () => {
        subtitle.style.maxHeight = subtitle.scrollHeight + 'px';
        btnReadMore.style.display = 'none';
        btnCollapse.style.display = 'flex';
    });

    btnCollapse.addEventListener('click', () => {
        subtitle.style.maxHeight = maxHeight;
        btnCollapse.style.display = 'none';
        btnReadMore.style.display = 'flex';
        subtitle.scrollTop = 0;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleToggleText('.seo-info__content', '.seo-info__subtitle', '#btn-read-more-seo', '#btn-collapse-seo', '208px');
});

document.addEventListener('DOMContentLoaded', () => {
    handleToggleText('.service__maintenance-collapse__container', '.service__maintenance-collapse__content', '#btn-read-more-service', '#btn-collapse-service', '290px');
});

document.addEventListener('DOMContentLoaded', () => {
    handleToggleText('.service__benefit-container', '.service__list-benefit', '#btn-read-more-service', '#btn-collapse-service', '138px');
});

document.addEventListener('DOMContentLoaded', () => {
    handleToggleText('.service__benefit-container-2', '.service__list-benefit-2', '#btn-read-more-service-2', '#btn-collapse-service-2', '138px');
});