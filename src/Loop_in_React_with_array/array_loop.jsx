function Array_loop() {

  const userData = [
    {
      name: 'Appaso',
      age: '23',
      email: 'appaso1919@gmail.com',
      id: '1'
    },
    {
      name: 'Pritham',
      age: '24',
      email: 'pritham@gmail.com',
      id: '2'
    },
    {
      name: 'Ajay',
      age: '23',
      email: 'ajay@gmail.com',
      id: '3'
    },
    {
      name: 'pranav',
      age: '23',
      email: 'pranav@gmail.com',
      id: '4'
    }
  ]
  return (
    <div style={{align:"Center"}}>
      <table border='1'>
        <thead>
          <tr>
            <td>Id</td>
            <td>name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Array_loop;
