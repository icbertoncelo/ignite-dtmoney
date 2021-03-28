import {ReactComponent as LogoIcon} from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
  onOpenNewTransaction: () => void
}

export function Header({onOpenNewTransaction}:HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoIcon />

        <button type="button" onClick={onOpenNewTransaction}>Nova transação</button>
      </Content>
    </Container>
  )
}