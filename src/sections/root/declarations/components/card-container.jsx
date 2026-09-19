import { URL } from '@/constants/url'
import { VERSION } from '@/constants/version'

import CardList from './card-list'

// ponytail: 頁面 force-static，資料在建置時固定；抓取失敗直接讓建置失敗，避免上線一個空的宣言區
const fetchJson = async url => {
  const res = await fetch(url, {
    cache: 'force-cache',
    signal: AbortSignal.timeout(5000),
  })
  if (!res.ok) {
    throw new Error(`Fetch failed ${res.status}: ${url}`)
  }
  return res.json()
}

async function CardContainer() {
  const [battleDeclarations, declarationsOptions] = await Promise.all([
    fetchJson(
      `${URL.BattleListCDN}${VERSION.MemberDeclarationsCDN}/website/declaration_data.json`,
    ),
    fetchJson(
      `${URL.BattleListCDN}${VERSION.BattleListCDN}/DeclarationsList.json`,
    ),
  ])

  return (
    <CardList
      battleDeclarations={battleDeclarations}
      declarationsOptions={declarationsOptions}
    />
  )
}

export default CardContainer
