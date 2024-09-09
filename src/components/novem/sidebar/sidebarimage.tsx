function SidebarImage(
  {src}: {src: string}
) {
  return (
    <div className="w-full flex justify-center" children={<img className="z-10" src={src}></img>}/>
  );
}

export default SidebarImage;