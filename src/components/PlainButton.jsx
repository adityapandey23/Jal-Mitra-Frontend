

function PlainButton({label, onClick}) {
  return <button onClick={onClick} className="bg-blue-500 text-white px-5 py-1 rounded-2xl font-bold hover:bg-blue-600 transition duration-150">
    {label}
  </button>
}

export default PlainButton