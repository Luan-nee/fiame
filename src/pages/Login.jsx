export default function Login(){
  return (
    <>
      <section className="flex flex-row items-center justify-center min-h-screen relative">
        <form className="flex flex-col bg-gray-700 text-white shadow-2xl p-2 rounded-md gap-1">
          <h2 className="text-nowrap text-2xl font-bold text-center">Iniciar Sesión</h2>
          <label htmlFor="" className="flex flex-col gap-1">
            <p className="text-lg">Correo electrónico:</p>
            <input type="text" className="border-1 border-black rounded-lg py-1 px-2 text-gray-700"/>
          </label>
          <div className="flex flex-row justify-center pt-2">
            <button className="bg-black text-white text-center py-1 px-2 rounded-md font-bold">Ingresar</button>
          </div>
        </form> 
      </section>
    </>
  )
}