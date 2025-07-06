interface Props {
  thickness?: | "1" | "2" | "3" | "4" | "5" | "6"
}

const Separator = ({ thickness = "1" }: Props) => {

  return (
    <div className="w-full" style={{ height: `${10 * parseInt(thickness)}px`}}></div>
  )
}
export default Separator