import ProductsList from '../../ProductsList'
import resident from '../../../assets/images/resident.png'
import diablo from '../../../assets/images/diablo.png'
import zelda from '../../../assets/images/zelda.png'
import starWars from '../../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gamesEsportse, setGameEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGameLuta] = useState<Game[]>([])
  const [gamesRPG, setGameRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsportse} title="Esportes" background="gray" />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="gray"
      />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}

export default Categories
