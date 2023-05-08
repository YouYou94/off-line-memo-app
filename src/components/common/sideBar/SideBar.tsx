import { useRecoilState } from 'recoil';
import DARKMODE from '../../../assets/menu/darkmode.png';
import HOME from '../../../assets/menu/home.png';
import READ from '../../../assets/menu/read.png';
import { Nav, List, Item, Icon } from './SideBarStyled';
import { modeState } from '../../../recoil';

export const SideBar = ({ setTap }: any) => {
  const [mode, setMode] = useRecoilState(modeState);
  const handleClickDarkMode = () => {
    if (mode === 'bright') setMode('dark');
    else setMode('bright');
  };
  const handleClickHome = () => setTap(0);
  const handleClickRead = () => setTap(1);

  return (
    <Nav>
      <List>
        <Item onClick={handleClickDarkMode} title="다크모드| 화면대비">
          <Icon icon={DARKMODE} />
        </Item>
        <Item onClick={handleClickHome} title="홈| 검색">
          <Icon icon={HOME} />
        </Item>
        <Item onClick={handleClickRead} title="노트| 추가 조회 수정 삭제">
          <Icon icon={READ} />
        </Item>
      </List>
    </Nav>
  );
};