// import Imagegrid from "./parts/Imagegrid"

function Exploremore({ title ,  images , hasAction=false , btnText='more' , action , children  }) {
  return (
    <>
                <div className="mt-10">
                <div className="flex justify-between">
                    <h1 className="title">{title}</h1>
                    {hasAction && <button onClick={action} className="w-[15%]  cursor-pointer underline text-green-500 capitalize justify-center bg-inherit hover:bg-inherit ">{btnText}</button>  }  
                </div>
                  {children}
                 {/* <Imagegrid images={images} columns={'grid-cols-10  gap-x-6 justify-center'} imageCLass={'w-28 h-40 object-cover'} hasTitle={true} hasPrice={true} /> */}
            </div>

    </>
  )
}

export default Exploremore

