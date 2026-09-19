const Footer = ({ copyright = '© 2025 #リキイ盃 All rights reserved.' }) => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="wrapper">
        <footer>
          <div className="text-muted-foreground flex border-t py-4 text-sm font-medium 1440:py-8">
            <p className="font-noto-sans-jp">{copyright}</p>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
