const Footer = ({ copyright = '© 2025 #リキイ盃 All rights reserved.' }) => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="wrapper">
        <footer>
          <nav
            aria-label="頁面區塊"
            className="text-blue-primary flex flex-wrap gap-x-4 gap-y-2 py-4 text-sm font-bold"
          >
            <a href="#memory">賽事回憶</a>
            <a href="#address">活動地點</a>
            <a href="#declaration">應戰宣言</a>
            <a href="#qa">常見問題</a>
          </nav>
          <div className="text-muted-foreground flex border-t py-4 text-sm font-medium 1440:py-8">
            <p className="font-noto-sans-jp">{copyright}</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
