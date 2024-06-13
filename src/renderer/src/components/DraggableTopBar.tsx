import { Maximize, Minus, X } from 'lucide-react'

const DraggableTopBar = () => {
  return (
    <header className="pl-2 w-full absolute inset-0 h-8 bg-black flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <button className="bg-red-500 w-4 h-4 rounded-full cursor-default"></button>
        <div className="bg-yellow-500 w-4 h-4 rounded-full cursor-default"></div>
        <div className="bg-green-500 w-4 h-4 rounded-full cursor-default"></div>
      </div>
      <div className="flex-1 flex justify-center">
        <p className="text-white">Arslan Application</p>
      </div>
      <div className="flex items-center h-full">
        <button
          className="flex items-center justify-center w-12 h-full hover:bg-yellow-500"
          onClick={() => window.electronAPI.minimizeApp()}
        >
          <Minus className="text-white" size={20} />
        </button>
        <button
          className="flex items-center justify-center w-12 h-full hover:bg-green-500"
          onClick={() => window.electronAPI.maximizeApp()}
        >
          <Maximize className="text-white" size={20} />
        </button>
        <button
          className="flex items-center justify-center w-12 h-full hover:bg-red-500"
          onClick={() => window.electronAPI.closeApp()}
        >
          <X className="text-white" size={20} />
        </button>
      </div>
    </header>
  )
}

export default DraggableTopBar
