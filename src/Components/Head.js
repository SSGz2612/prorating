import { Button } from '@mui/material';

function Head() {
    return (
        <div className='header'>
            <div className='header-a'>
                <div className='header-aa'>404</div>
                <div className='header-ab'>К сожалению, страница, которую вы ищете, не существует.</div>
                <div className='header-ac'>Кажется, мы не можем найти нужную страницу. Попробуйте вернуться на предыдущую страницу или свяжитесь с нами, чтобы начать работу.</div>
                <div className='header-ad'>
                    <Button
                        color='inherit'
                        variant="outlined"
                        sx={{
                        fontSize: 16,
                        fontWeight: 'regular',
                        textTransform: 'capitalize',
                        borderColor: '#E7E8F2'
                        }}
                    >Перейти на Главную</Button>
                </div>
            </div>
        </div>
    )
}

export default Head;