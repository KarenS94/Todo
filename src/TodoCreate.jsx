const TodoCreate = () => {

    return (
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4" >
        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
        <input 
        type="text" 
        placeholder="Create a new TODO...." 
        className="w-full text-gray-400 outline-none"
        />
      </form>

    )
   

}
 export default TodoCreate;