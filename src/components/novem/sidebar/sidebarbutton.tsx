interface Props {
  text: string,
  onClick?: () => void,
  hidden?: boolean;
}

function SidebarButton(props: Props) {
  return (
    <a
      className="text-2xl font-medium text-white cursor-pointer drop-shadow-lg transition duration-300 ease-in-out transform hover:text-purple-600 hover:scale-110"
      children={props.text}
      onClick={props.onClick}
      hidden={props.hidden}/>
  )
}

export default SidebarButton;