import { StyledFooter, Link, Paragraph } from "./styled";

const Footer = () => (
  <StyledFooter>
    © Grzegorz Pacewicz, 2022
    <Paragraph>
      Kursy walut Europejskiego Banku Centralnego przy użyciu <Link href="https://exchangerate.host/"> exchangerate.host</Link> 
    </Paragraph>
  </StyledFooter>
);

export default Footer;
