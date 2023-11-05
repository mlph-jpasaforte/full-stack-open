const Notification = ({ text }) => {
  const style = {
    border: 'solid',
    borderWidth: 1,
    padding: 10,
  }

  return <div style={style}>{text}</div>
}

export default Notification
