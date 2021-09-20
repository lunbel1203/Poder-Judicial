window.onload = () => {

    /***********************************************************
    * STEPS FORM
    ************************************************************/

    const steps = Array.from(document.querySelectorAll('.step__content'));
    const tabs = Array.from(document.querySelectorAll('.panel__tab'))
    const nextBtn = document.querySelectorAll('.next-btn');
    const prevBtn = document.querySelectorAll('.prev-btn');
    const form = document.querySelector('form');

    nextBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            changeStep('next');
        })
    })

    prevBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            changeStep('prev');
        })
    })

    tabs.forEach(tab => {
        if (tab.classList.contains('tab__active')) {
            let position = tab.getBoundingClientRect().right;
            document.getElementById('progress__bar').style.width = `${position - 50}px`;
        } 
    });

    const changeStep = (btn) => {
        let index = 0;
        const active = document.querySelector('form .step__content.step__active');
        index = steps.indexOf(active);

        tabs[index].classList.add('tab__completed');
        tabs[index].classList.remove('tab__active');
        steps[index].classList.remove('step__active');

        if (btn === 'next') {
            tabs[index].classList.add('tab__completed');
            index ++;
        } else if (btn === 'prev') {
            tabs[index].classList.remove('tab__completed');
            index --;
        }

        let position = tabs[index].getBoundingClientRect().right;

        if (index === 0) {
            document.getElementById('progress__bar').style.width = `16.45%`;
        } else if (index === 1) {
            document.getElementById('progress__bar').style.width = `33.30%`;

        } else if (index === 2) {
            document.getElementById('progress__bar').style.width = `49.8%`;

        } else if (index === 3) {
            document.getElementById('progress__bar').style.width = `66.6%`;

        } else if (index === 4) {
            document.getElementById('progress__bar').style.width = `83.40%`;

        } else if (index === 5) {
            document.getElementById('progress__bar').style.width = `100%`;

        }
        // document.getElementById('progress__bar').style.width = `${position}px`;

        tabs[index].classList.remove('tab__completed');
        tabs[index].classList.add('tab__active');
        steps[index].classList.add('step__active');

        if (index > 0) {
            document.getElementById('borradores__disponibles').style.display = 'none';
        } else if (index < 2) {
            document.getElementById('borradores__disponibles').style.display = 'block';
        }

    }

};