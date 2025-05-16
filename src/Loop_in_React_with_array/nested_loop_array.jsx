import Collage from "./Collage_use_nested_loop";

function Nested_loop_array() {
  const collageData = [
    {
      name: "DY Patil",
      city: "Kolhapur",
      website: "www.dypatil.com",
      student: [
        {
          name: 'Appaso',
          age: '23',
          email: 'appaso1919@gmail.com',
        },
        {
          name: 'Pritham',
          age: '24',
          email: 'pritham@gmail.com',
        },
        {
          name: 'Ajay',
          age: '23',
          email: 'ajay@gmail.com',
        },
        {
          name: 'pranav',
          age: '23',
          email: 'pranav@gmail.com',
        }]
    },
    {
      name: "Shivaji University",
      city: "Kolhapur",
      website: "www.suk.com",
      student: [
        {
          name: 'Appaso',
          age: '23',
          email: 'appaso1919@gmail.com',
        },
        {
          name: 'Pritham',
          age: '24',
          email: 'pritham@gmail.com',
        },
        {
          name: 'Ajay',
          age: '23',
          email: 'ajay@gmail.com',
        },
        {
          name: 'pranav',
          age: '23',
          email: 'pranav@gmail.com',
        }]
    },
    {
      name: "Rajaram Collage",
      city: "Kolhapur",
      website: "www.dypatil.com",
      student: [
        {
          name: 'Appaso',
          age: '23',
          email: 'appaso1919@gmail.com',
        },
        {
          name: 'Pritham',
          age: '24',
          email: 'pritham@gmail.com',
        },
        {
          name: 'Ajay',
          age: '23',
          email: 'ajay@gmail.com',
        },
        {
          name: 'pranav',
          age: '23',
          email: 'pranav@gmail.com',
        }]
    }

  ]
  return (
    <div>
      {
        collageData.map((college, index) => (
          <div key={index}>
            <Collage college={college}/>
          </div>
        ))
      }

    </div>
  )
}

export default Nested_loop_array;
