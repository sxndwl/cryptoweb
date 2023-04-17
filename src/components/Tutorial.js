import { useState, useEffect } from 'react'
import JoyRide from 'react-joyride'
import { content } from '../api/content'

const Tutorial = (props) => {
    const [shouldShow, setShouldShow] = useState(false)
    const isFirstVisit = localStorage.getItem('isFirstVisit') === null

    useEffect(() => {
        const screenWidth = window.innerWidth
        if (screenWidth > 1000) {
            setShouldShow(true)
        }
    }, [])

    const handleTutorialEnd = (data) => {
        if (data.status === 'finished') {
            localStorage.setItem('isFirstVisit', false)
        }
    }

    const Locale = {
        back: 'Назад',
        close: 'Пропустить',
        last: 'Закрыть',
        next: 'Далее',
        open: 'Открыть',
        skip: 'Пропустить'
    }
    
    return (
        <>
            {shouldShow && (
                <JoyRide
                    continuous={true}
                    locale={Locale}
                    run={isFirstVisit}
                    steps={content.ru.Steps}
                    showProgress={true}
                    showSkipButton
                    callback={handleTutorialEnd}
                    styles={{
                        options: {
                            arrowColor: props.theme.colors.borderColor,
                            backgroundColor: props.theme.colors.backgroundColor,
                            overlayColor: props.theme.colors.overlayColor,
                            textColor: props.theme.colors.textColor,
                            zIndex: 999,
                        }
                    }}
                />
            )}
        </>
    )
}

export default Tutorial