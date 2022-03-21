import './App.css';

import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Accordion } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { AccordionDetails } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

function App() {
  return (
    <div className='gral'>

      <div className='nav'>
        <div className='nav-a'><div className='nav-logo'></div></div>
        <div className='nav-b'>
              <nav>
                <a href="#">Найти исполнителя</a>
                <a href="#">Проекты</a>
                <a href="#">Закладки</a>
                <a href="#">Входящие</a>
                <a href="#" className='a5'>Блог</a>
              </nav>
        </div>

        <div className='nav-c'>
          <InputBase
            sx={{
              flex: 1,
              bgcolor: "rgba( 231, 232, 242, 0.38 )",
              height: "40px",
              borderRadius: "32px"
            }}
            placeholder="Найти специалиста"
            startAdornment={
              <IconButton type="submit" aria-label="search"><SearchIcon /></IconButton>
            }
          />
          
          <div className='nav-ca'>
            <IconButton
              size="32px"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Avatar src="" sx={{ width: 32, height: 32 }} />
          </div>
        </div>
      </div>

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
              }}>Перейти на Главную</Button>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-a'>
          <div className='footer-aa'>Стать специалистом</div>
          <Divider />
          <div className='footer-ab'>Партнерская программа</div>
          <Divider />
          <div className='footer-ac'>Блог</div>
          <Divider />
          <div className='footer-ad'>Новый заказ</div>
          <Divider />
        </div>

        <div className='footer-b'>
        <Accordion elevation={0} disableGutters='false'>
            <AccordionSummary sx={{ height: 68 }} expandIcon={<ExpandMoreIcon />}>Города</AccordionSummary>
            <AccordionDetails>
              <div className="footStyled">Варшава</div>
              <div className="footStyled">Краков</div>
              <div className="footStyled">Лодзь</div>
              <div className="footStyled">Вроцлав</div>
              <div className="footStyled">Познань</div>
              <div className="footStyled">Гданьск</div>
              <div className="footStyled">Все города</div>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} disableGutters='false'>
            <AccordionSummary sx={{ height: 68 }} expandIcon={<ExpandMoreIcon />}>Услуги</AccordionSummary>

            <AccordionDetails>
              <div className="footStyled">Услуга 1</div>
              <div className="footStyled">Услуга 2</div>
              <div className="footStyled">Услуга 3</div>
              <div className="footStyled">Услуга 4</div>
              <div className="footStyled">Услуга 5</div>
              <div className="footStyled">Услуга 6</div>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} disableGutters='false'>
            <AccordionSummary sx={{ height: 68 }} expandIcon={<ExpandMoreIcon />}>Компания</AccordionSummary>

            <AccordionDetails>
              <div className="footStyled">Про Кампанию</div>
              <div className="footStyled">Privacy Policy</div>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} disableGutters='false'>
            <AccordionSummary sx={{ height: 68 }} expandIcon={<ExpandMoreIcon />}>Контакты</AccordionSummary>

            <AccordionDetails>
              <div className="footStyled">info@establid.com</div>
              <div className="footStyled">+46 (0) 81-213-7994</div>
            </AccordionDetails>
          </Accordion>

          <Divider />
        </div>

        <div className='footer-c'>
          <div className="footFl">
            <div className='footer-ca'>
              <div className='foot-logo'></div>
            </div>

            <div className='footer-cb'>
              <div className="footer-txt">Real-time updates on construction development</div>
            </div>

            <div className='footer-cc'>
              <div className="icon"><div className="iconLin"></div></div>
              <div className="icon"><div className="iconTwi"></div></div>
              <div className="icon"><div className="iconIns"></div></div>
              <div className="icon"><div className="iconYou"></div></div>
              <div className="icon"><div className="iconFac"></div></div>              
            </div>
          </div>

        </div>
      </div>
    
    </div>
  );
}

export default App;