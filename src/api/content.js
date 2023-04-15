export const content = {
    ru: {
        basic: {},
        Steps: [
            {
                title: 'Coins',
                content: (
                    <p className='ru'>Здесь собраны самые популярные криптовалюты. Попробуйте выбрать одну из них, чтобы получить подробную информацию о ней.</p>
                ),
                target: '.coins',
                placement: 'right'
            },
            {
                title: (
                    <p className='ru'>Aside</p>
                ),
                content: (
                    <p className='ru'>Здесь вы можете увидеть подробную информацию о выбранной вами криптовалюте.</p>
                ),
                target: '.aside'
            },
            {
                title: 'Chart',
                content: (
                    <p className='ru'>Здесь вы можете отслеживать изменение криптовалюты с помощью графика.</p>
                ),
                target: '.chart',
                placement: 'top'
            },
            {
                title: 'Trade history',
                content: (
                    <p className='ru'>Здесь вы можете просмотреть историю сделок по выбранной криптовалюте, включая время, объем торгов и цену сделок.</p>
                ),
                target: '.trade',
                placement: 'top'
            },
            {
                title: 'Search',
                content: (
                    <p className='ru'>Здесь вы можете найти и выбрать интересующую вас криптовалюту, а также осуществить поиск по названию или символьному коду криптовалюты.</p>
                ),
                target: '.search',
                placement: 'top'
            }
        ]
    },
    eng: {
        basic: {},
        tutorial: {
            1: {},
            2: {},
            3: {},
            4: {},
            5: {}
        }
    }
}