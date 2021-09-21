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

        tabs[index].classList.remove('tab__completed');
        tabs[index].classList.add('tab__active');
        steps[index].classList.add('step__active');

        if (index > 0) {
            document.getElementById('borradores__disponibles').style.display = 'none';
        } else if (index < 2) {
            document.getElementById('borradores__disponibles').style.display = 'block';
        }

    }


    /***********************************************************
    * MODALS
    ************************************************************/
    const modals = document.querySelectorAll('.modal');
    const savedDraftButton = form.querySelectorAll('.savedDraft__button');
    const backButton = document.getElementById('back__btn');
    const draftsAvailableButton = document.getElementById('borradores__disponibles');
    const registerDeleteButton = document.querySelectorAll('.register__delete');
    const registerInmuebleButton = document.querySelectorAll('.register__inmueble-button');

    const caseNumber = form.querySelector('.step-1 input[name="nuc"]');
    const closeModalButton = document.querySelectorAll('.closeModal');

    const openModal = (e) => {
        e.preventDefault();
        
        if (e.target.name === 'nuc') {
            modals.forEach(modal => {
                if (modal.classList.contains('modal__case-number')) {
                    modal.classList.add('modal__active');
                }
            })
        }

        if (e.target.classList.contains('register__inmueble-button')) {
            modals.forEach(modal => {
                if (modal.classList.contains('modal__registroInmueble')) {
                    modal.classList.add('modal__active');
                }
            })
        }

        if (e.target.classList.contains('register__delete')) {
            modals.forEach(modal => {
                if (modal.classList.contains('modal__action-delete')) {
                    modal.classList.add('modal__active');
                }
            })
        }

        if (e.target.id === 'back__btn') {
            modals.forEach(modal => {
                if (modal.classList.contains('modal__regresar')) {
                    modal.classList.add('modal__active');
                }
            })
        }

        if (e.target.id === 'borradores__disponibles') {
            modals.forEach(modal => {
                if (modal.classList.contains('modal__borradores')) {
                    modal.classList.add('modal__active');
                }
            })
        }

        if (e.target.classList.contains('savedDraft__button')) {
            modals.forEach(modal => {
                if (modal.classList.contains('modal__saved-draft')) {
                    modal.classList.add('modal__active');
                }
            })
        }
        
    }

    const closeModal = (e) => {
        e.preventDefault()
        modals.forEach(modal => {
            if (modal.classList.contains('modal__active')) {
                modal.classList.remove('modal__active')
            }
        })
    }
    
    // OPEN MODAL
    backButton.addEventListener('click', openModal);

    registerInmuebleButton.forEach(deleteButton => {
        deleteButton.addEventListener('click', openModal);
    })

    registerDeleteButton.forEach(deleteButton => {
        deleteButton.addEventListener('click', openModal);
    })

    draftsAvailableButton.addEventListener('click', openModal);

    caseNumber.addEventListener('click', openModal);

    savedDraftButton.forEach(savedButton => {
        savedButton.addEventListener('click', openModal);
    })

    // CLOSE MODALS
    closeModalButton.forEach(closeButton => {
        closeButton.addEventListener('click', closeModal);
    })
}