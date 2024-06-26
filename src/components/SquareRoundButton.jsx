
function SquareRoundButton({label, onClick}) {
  return <button onClick={onClick} className="bg-blue-500 text-white px-5 py-3 rounded-md font-bold hover:bg-blue-600 transition duration-150">
    {label}
  </button>
}

export default SquareRoundButton