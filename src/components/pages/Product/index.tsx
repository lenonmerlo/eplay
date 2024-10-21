import { useParams } from 'react-router-dom'
import Hero from '../../Hero'
import Section from '../../Section'
import Gallery from '../../Gallery'

import residentEvil from '../../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [id])

  if (!game) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        {/* Envolvendo o conteúdo em um fragmento ou div */}
        <>
          <p>
            <b>Plataforma:</b> {game.details.system} <br />
            <b>Desenvolvedor:</b> {game.details.developer} <br />
            <b>Editora:</b> {game.details.publisher} <br />
            <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
            {game.details.languages.join(', ')}
          </p>
        </>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
