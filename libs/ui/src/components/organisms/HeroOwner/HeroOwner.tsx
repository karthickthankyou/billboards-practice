import { Container } from '../../atoms/Container'
import { LinkButton } from '../../atoms/LinkButton'

export interface IHeroOwnerProps {}

export const HeroOwner = ({}: IHeroOwnerProps) => {
  return (
    <Container className="flex items-center justify-end h-96">
      <div className="text-right">
        <div className="text-5xl font-bold">Have some space?</div>
        <LinkButton
          href="/install"
          className="inline-block px-4 py-2 mt-6 text-white bg-black"
        >
          Install our billboard
        </LinkButton>
      </div>
    </Container>
  )
}
