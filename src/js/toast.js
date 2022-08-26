export default class Toast {

    // Stack position classes
    STACK_CLASS_TL = 'easy-toast-stack-tl'
    STACK_CLASS_TR = 'easy-toast-stack-tr'
    STACK_CLASS_TM = 'easy-toast-stack-tm'
    STACK_CLASS_BR = 'easy-toast-stack-br'
    STACK_CLASS_BL = 'easy-toast-stack-bl'
    STACK_CLASS_BM = 'easy-toast-stack-bm'
    STACK_CLASS_CENTER = 'easy-toast-stack-center'
    TIMELINE_CLASS = 'easy-toast-timeline'

    // Positions
    POSITION_TR = 'top-right'
    POSITION_TM = 'top-middle'
    POSITION_TL = 'top-left'
    POSITION_BL = 'bottom-left'
    POSITION_BM = 'bottom-middle'
    POSITION_BR = 'bottom-right'
    POSITION_CENTER = 'center'

    // Types
    TYPE_DEFAULT = 'default'
    TYPE_SUCCESS = 'success'
    TYPE_DANGER = 'danger'
    TYPE_WARNING = 'warning'
    TYPE_DARK = 'dark'

    DEFAULT_CONFIG = {
        duration: 3,
        type: 'default',
        position: 'bottom-right',
        hasCloseButton: true,
        showTimeline: true,
        autoclose: true,
        stopOnHover: true,
        events: {
            'click': null,
            'closeClick': null,
        }
    }

    notify(message, cfg = {}) {
        let config = {...this.DEFAULT_CONFIG, ...cfg }

        let stack = this.getStack(config.position)
        let { notify, notifyClose, notifyTimeline } = this.createNotify(message, config)

        if (config.stopOnHover) {
            notify.onmouseenter = function() {
                notify.setAttribute('data-pause', 'pause');
            }
            notify.onmouseleave = function() {
                notify.removeAttribute('data-pause');
                let startTime = notify.getAttribute('data-start')
                let lastTime = notify.getAttribute('data-last')

                this.startAnimate(notify, config, (lastTime - startTime), notifyTimeline.style.width.replace('%', ''))
            }.bind(this)
        }

        stack.prepend(notify)

        let animateId = this.startAnimate(notify, config)

        // Register event close click
        if (config.hasCloseButton) {
            if (typeof config.events.closeClick === 'function')
            {
                notifyClose.onclick = function(e) {
                    e.stopPropagation();
                    config.events.closeClick(e);
                }
            } else {
                notifyClose.onclick = (e) => {
                    e.stopPropagation();
                    this.destroy(notify, animateId)
                }
            }
        }

        // Register event notify click
        if (typeof config.events.click === 'function')
        {
            notify.onclick = function(e) {
                e.stopPropagation();
                config.events.click(e);
            }
        }
    }

    startAnimate(notify, config, startDuration = null, startPercent = null) {
        notify.setAttribute('data-start', Date.now())

        let duration = startDuration ?
            config.duration * 1000 - startDuration : config.duration * 1000

        let percent = startPercent ?? 100


        let animateId = this.animate({
            timing: function(timeFraction) {
                return percent - (timeFraction * 100)
            },
            draw: (progress) => {
                if (config.showTimeline && config.autoclose) {
                    notify.setAttribute('data-last', Date.now())
                    notify.querySelector(`.${this.TIMELINE_CLASS}`).style.width = progress + '%';
                }
                if (progress < 1) {
                    if (config.autoclose) {
                        this.destroy(notify, animateId)
                    }
                }
            },
            duration,
            notify
        })

        return animateId;
    }

    createNotify(text, config) {
        let typeClass = this.getTypeClass(config.type)
        let timeLineBg = this.getTimelineClass(config.type)

        let notifyBlock = document.createElement('div');
        notifyBlock.className = 'easy-toast easy-toast-block ' + typeClass

        let notifyFlex = document.createElement('div');
        notifyFlex.className = 'easy-toast et-p-4 et-flex'

        let notifyTitle = document.createElement('p')
        notifyTitle.className = 'easy-toast et-px-3'
        notifyTitle.innerHTML = text.replaceAll('script', '')

        let notifyContainer = document.createElement('div')
        notifyContainer.className = 'easy-toast et-ml-auto'

        let notifyClose = document.createElement('button')
        notifyClose.className = 'easy-toast easy-toast-button'

        notifyClose.innerHTML = `
        <span class="easy-toast et-sr-only">Close</span>
        <svg class="easy-toast easy-toast-svg-close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
        </svg>
        `


        let notifyTimeline = document.createElement('div')
        notifyTimeline.className = `easy-toast ${timeLineBg} ${this.TIMELINE_CLASS}`

        notifyFlex.append(notifyTitle)

        if (config.hasCloseButton) {
            notifyContainer.append(notifyClose)
        }

        notifyFlex.append(notifyContainer)
        notifyBlock.append(notifyFlex)

        if (config.showTimeline && config.autoclose) {
            notifyBlock.append(notifyTimeline)
        }



        return {
            notify:notifyBlock,
            notifyClose,
            notifyTimeline
        };

    }

    getStack(position) {
        let positionClass = this.getPositionClasses(position)
        let stackClass = this.getStackClass(position)

        let stack = document.querySelector('.' + stackClass)
        if (!stack)
        {
            let stackContainer = document.createElement('div')
            stackContainer.className = 'easy-toast et-fixed ' + positionClass

            stack = document.createElement('div')
            stack.className = 'easy-toast easy-toast-stack ' + stackClass;

            stackContainer.append(stack)

            document.body.append(stackContainer)
        }
        return stack;
    }

    destroy(block, animateId = null) {
        block.remove()
        if (animateId) {
            cancelAnimationFrame(animateId)
        }
    }

    getPositionClasses(position) {
        switch (position) {
            case this.POSITION_TL: return 'easy-toast-position-top-left';
            case this.POSITION_TM: return 'easy-toast-position-top-middle';
            case this.POSITION_TR: return 'easy-toast-position-top-right';

            case this.POSITION_BL: return 'easy-toast-position-bottom-left';
            case this.POSITION_BM: return 'easy-toast-position-bottom-middle';
            case this.POSITION_BR: return 'easy-toast-position-bottom-right';
            case this.POSITION_CENTER: return 'easy-toast-position-center';
            default: return 'easy-toast-position-bottom-right'

        }
    }

    getStackClass(position) {
        switch (position) {
            case this.POSITION_TL: return this.STACK_CLASS_TL;
            case this.POSITION_TM: return this.STACK_CLASS_TM;
            case this.POSITION_TR: return this.STACK_CLASS_TR;
            case this.POSITION_BL: return this.STACK_CLASS_BL;
            case this.POSITION_BM: return this.STACK_CLASS_BM;
            case this.POSITION_BR: return this.STACK_CLASS_BR;
            case this.POSITION_CENTER: return this.STACK_CLASS_CENTER;
            default: return this.STACK_CLASS_BR;
        }
    }

    getTypeClass(type) {
        switch (type) {
            case this.TYPE_DEFAULT: return 'et-bg-gray-500';
            case this.TYPE_SUCCESS: return 'et-bg-green-500';
            case this.TYPE_DANGER: return 'et-bg-red-500';
            case this.TYPE_WARNING: return 'et-bg-yellow-500';
            case this.TYPE_DARK: return 'et-bg-gray-900';
        }
    }

    getTimelineClass(type) {
        switch (type) {
            case this.TYPE_DEFAULT: return 'et-bg-gray-900';
            case this.TYPE_SUCCESS: return 'et-bg-green-900';
            case this.TYPE_DANGER: return 'et-bg-red-900';
            case this.TYPE_WARNING: return 'et-bg-yellow-900';
            case this.TYPE_DARK: return 'et-bg-gray-500';
        }
    }

    animate = ({timing, draw, duration, notify}) => {

        let start = performance.now();

        return requestAnimationFrame(function animate(time) {

            if (notify.getAttribute('data-pause')) return;

            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);

            draw(progress); // отрисовать её

            if (timeFraction < 1) {
                return requestAnimationFrame(animate);
            }

        });
    }

    testShowAll() {
        let conf1 = {
            duration: 3,
            type: 'default',
            position: 'bottom-right',
            hasCloseButton: false,
            showTimeline: true,
            autoclose: true,
            stopOnHover: true,
            events: {
                'click': null,
                'closeClick': null,
            }
        }
        let conf2 = {
            duration: 3,
            type: 'success',
            position: 'bottom-left',
            hasCloseButton: true,
            showTimeline: false,
            autoclose: true,
            stopOnHover: true,
            events: {
                'click': null,
                'closeClick': null,
            }
        }
        let conf3 = {
            duration: 3,
            type: 'warning',
            position: 'bottom-middle',
            hasCloseButton: true,
            showTimeline: true,
            autoclose: false,
            stopOnHover: true,
            events: {
                'click': null,
                'closeClick': null,
            }
        }
        let conf4 = {
            duration: 3,
            type: 'danger',
            position: 'top-right',
            hasCloseButton: false,
            showTimeline: true,
            autoclose: true,
            stopOnHover: true,
            events: {
                'click': null,
                'closeClick': null,
            }
        }
        let conf5 = {
            duration: 3,
            type: 'dark',
            position: 'top-left',
            hasCloseButton: true,
            showTimeline: true,
            autoclose: true,
            stopOnHover: true,
            events: {
                'click': null,
                'closeClick': null,
            }
        }
        let conf6 = {
            position: 'top-middle',
            autoclose: false,
        }

        let conf7 = {
            duration: 10,
            position: 'center',
            type: 'success'
        }

        this.notify('Bottom-Right position', conf1)
        this.notify('Bottom-Left position', conf2)
        this.notify('Bottom-Middle position', conf3)
        this.notify('Top-Right position', conf4)
        this.notify('Top-Left position', conf5)
        this.notify('Top-Middle position', conf6)
        this.notify('Center position', conf7)
    }

}
