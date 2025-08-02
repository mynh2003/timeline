function Start() {
    const timeline = document.querySelector('.timeline');
    const content = timeline.querySelector('.timeline-content')
    const items = timeline.querySelectorAll('.timeline-item');
    const title = timeline.querySelector('.title');
    const names = timeline.querySelector('.names');


    if (!timeline) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Hiện các timeline item lần lượt
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });

                    // Hiện title và names
                    content?.classList.add('visible');

                    title?.classList.add('visible');
                    names?.classList.add('visible');

                    observer.unobserve(entry.target); // chỉ chạy 1 lần
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    items.forEach(item => observer.observe(item));
}



export default function InitTimeline() {
    Start()
}