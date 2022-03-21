import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
    return (
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
    )
}

export default Nav;