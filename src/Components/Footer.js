import { Accordion } from '@mui/material';
import { AccordionSummary } from '@mui/material';
import { AccordionDetails } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

function Footer() {
    return (
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
    )
}

export default Footer;