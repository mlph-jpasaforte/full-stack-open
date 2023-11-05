const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    borderWidth: 1,
    padding: 10,
  }

  return <div style={style}>{notification}</div>
}

export default Notification
