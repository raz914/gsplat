export function UIControls() {
  return (
    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-1">
      {/* Burger Menu */}
      <button className="scale-50">
        <img 
          src="/BurgerIcon.png" 
          alt="Menu" 
          className="h-8 w-8"
        />
      </button>

      {/* Location/Map View */}
      <button className="scale-50">
        <img 
          src="/LocationIcon.png" 
          alt="Location" 
          className="h-8 w-8"
        />
      </button>

      {/* 3D View Toggle */}
      <button className="scale-50">
        <img 
          src="/3DIcon.png" 
          alt="3D View" 
          className="h-8 w-8"
        />
      </button>
    </div>
  )
} 