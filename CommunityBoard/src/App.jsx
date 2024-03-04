import Post from './components/Post';
import './App.css'

function App() {

  const Restaurants = [
    {
      name: 'Wendys',
      description: 'Fast Food that uses twitter for advertising'
    },
    {
      name: 'McDonalds',
      description: 'Fast Food but clown edition'
    },
    {
      name: 'Burger King',
      description: 'Fast Food but only known for Whoppers'
    },
    {
      name: 'Panda Express',
      description: 'Rice yipee'
    },
    {
      name: 'KFC',
      description: 'Chicken'
    },
    {
      name: 'Dunkin Donuts',
      description: 'Coffee and Donuts'
    },
    {
      name: 'Kung Fu Tea',
      description: 'Boba Yippeeee'
    },
    {
      name: 'Insomnia Cookies',
      description: 'Overpriced Cookies'
    },
    {
      name: 'Arbys',
      description: 'They have meat'
    },
    {
      name: 'YaYas bubble tea',
      description: 'ya ya ya bubble tea'
    }
  ]

  return (
    <>
        <h1>Restaurants</h1>

        {
          Restaurants.map((restaurant, i) => {
            return (<Post key={i} name={restaurant.name} description={restaurant.description}/>)
          })
        }
    </>
  )
}

export default App