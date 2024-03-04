import Post from './components/Post';
import './App.css'

function App() {

  const Restaurants = [
    {
      name: 'Vivi\'s Bubble Tea',
      description: 'They have nice sides like fries'
    },
    {
      name: 'Tiger Sugar',
      description: 'Known for really sweet Boba options'
    },
    {
      name: 'Shiny Tea',
      description: 'Known for their Panda Milk Tea'
    },
    {
      name: 'Tea and Milk',
      description: 'Uses really healthy and high quality ingredients'
    },
    {
      name: 'I\'Milky',
      description: 'Has a nice combo with a rice ball and side dish'
    },
    {
      name: 'Machi Machi',
      description: 'Aside from Boba they have mochi donuts and Korean corndogs'
    },
    {
      name: 'Teazzi Tea',
      description: 'Bubble Tea using imported tea leaves and sugar from Taiwan, also the cups are really pretty'
    },
    {
      name: 'Pa Tea',
      description: 'Cute bear logo, they have a really large size available'
    },
    {
      name: 'Kung Fu Tea',
      description: 'The go-to place'
    },
    {
      name: 'YaYas bubble tea',
      description: 'ya ya ya bubble tea, they have a stamp card'
    }
  ]

  return (
    <>
        <h1>Boba Places in NYC</h1>
        <div class="boxes">
        {
          Restaurants.map((restaurant, i) => {
            return (<Post key={i} name={restaurant.name} description={restaurant.description}/>)
          })
        }
        </div>
    </>
  )
}

export default App