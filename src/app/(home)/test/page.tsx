export default function Main(){
  let temp: string[] = []
  for (let i = 0; i < 50; i++){
    temp[i] = `Hello Test${i+1}!!!`
  }
  return (
    <div className="h-full overflow-scroll">
      {
        temp.map((key, index) => {
          return (
            <p key={key} className="text-center text-5xl">{temp[index]}</p>
          )
        })
      }
    </div>
  )
}