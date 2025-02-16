
 function Spinner() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-transparent 
            border-t-pink-500 border-r-rose-400 border-b-fuchsia-500 animate-spin">
          </div>  
          <div className="absolute inset-1 bg-white rounded-full"></div>
        </div>
      </div>
    );
  }
  
  export default Spinner