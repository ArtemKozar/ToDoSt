const ListItem = ({ task }) => {
  return (
    <>
      <div>
        {task.task}
        {!task.isDone ? <span> + </span> : <span> - </span>}
      </div>
    </>
  )
}

export default ListItem
