
function Container(props) {
    const {container_class , children} = props
  return (
    <>
        <div className={`my-16 ${container_class}`}>{children}</div>
    </>
  )
}

export default Container