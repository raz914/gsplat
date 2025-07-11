export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-6">
      <div className="flex items-center">
        {/* Logo only */}
        <div className="flex items-center group">
          <img 
            src="/LogoIcon.png" 
            alt="Navitas Coliving" 
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </header>
  )
} 